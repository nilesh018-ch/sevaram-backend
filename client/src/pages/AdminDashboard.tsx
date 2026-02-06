import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useStore } from "@/context/StoreContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Trash2, CheckCircle, LogOut, Plus, Package, MessageSquare, Layers, Edit } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import { io } from "socket.io-client";

// CSV helper
function csvEscape(val: string) {
  const v = val ?? "";
  return `"${String(v).replace(/"/g, '""')}"`;
}

function downloadLeadsCSV(inquiries: any[]) {
  const header = [
    "Timestamp", "Type", "Full Name", "Contact No", "WhatsApp No", "Email", "Country", "Company",
    "Product Name", "Quantity", "Brand", "Lab Test", "Certificate", "Target Price", "HSN Code",
    "Payment Terms", "Additional Requirements", "Status"
  ].join(",");

  const rows = inquiries.map(i => [
    csvEscape(i.date),
    csvEscape(i.type),
    csvEscape(i.fullName),
    csvEscape(i.mobileNo),
    csvEscape(i.whatsapp),
    csvEscape(i.email),
    csvEscape(i.country),
    csvEscape(i.company),
    csvEscape(i.productName),
    csvEscape(i.quantity),
    csvEscape(i.brand),
    csvEscape(i.labTest),
    csvEscape(i.certificate),
    csvEscape(i.targetPrice),
    csvEscape(i.hsnCode),
    csvEscape(i.paymentTerms),
    csvEscape(i.additionalRequirements || i.message),
    csvEscape(i.status)
  ].join(","));

  const csv = [header, ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "leads.csv";
  a.click();
  URL.revokeObjectURL(url);
}

export default function AdminDashboard() {
  const { 
    isAdmin, logout, categories, categoryProducts, 
    addProduct, removeProduct, addCategory, removeCategory, 
    inquiries, setInquiries, acceptInquiry, updateProduct 
  } = useStore();

  const [, setLocation] = useLocation();

  if (!isAdmin) {
    setLocation("/admin");
    return null;
  }

  const [newProduct, setNewProduct] = useState({
    categoryId: "", name: "", price: "Enquire", image: "", description: "", subCategory: ""
  });
  const [newCategory, setNewCategory] = useState({ id: "", label: "", image: "", description: "" });
  const [editingProduct, setEditingProduct] = useState<any>(null);

  // 🔴 Socket.io for live inquiry updates
  useEffect(() => {
    const socket = io();
    socket.on("new-inquiry", (inquiry: any) => {
      setInquiries((prev: any[]) => [inquiry, ...prev]);
    });
    socket.on("update-inquiry", (inquiry: any) => {
      setInquiries((prev: any[]) => prev.map(i => i.id === inquiry.id ? inquiry : i));
    });

    return () => {
      socket.disconnect();
    };
  }, [setInquiries]);

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduct.categoryId || !newProduct.name) return;
    addProduct(newProduct.categoryId, { ...newProduct });
    setNewProduct({ ...newProduct, name: "", description: "", image: "", subCategory: "" });
  };

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCategory.id || !newCategory.label) return;
    addCategory({ ...newCategory, count: "0 Products" });
    setNewCategory({ id: "", label: "", image: "", description: "" });
  };

  const totalProducts = Object.values(categoryProducts || {}).reduce((acc: number, arr: any) => acc + (arr?.length || 0), 0);
  const totalCategories = categories?.length || 0;
  const pendingLeads = inquiries.filter(i => i.status === "pending").length;

  return (
    <div className="admin-shell min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
            <p className="text-slate-600">Manage products, categories, and leads in one place.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="gap-2" onClick={() => { logout(); setLocation("/admin"); }}>
              <LogOut className="w-4 h-4" /> Logout
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader>
              <CardDescription>Total Categories</CardDescription>
              <CardTitle className="text-3xl">{totalCategories}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardDescription>Total Products</CardDescription>
              <CardTitle className="text-3xl">{totalProducts}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardDescription>Pending Leads</CardDescription>
              <CardTitle className="text-3xl">{pendingLeads}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Tabs defaultValue="products" className="space-y-6">
          <TabsList>
            <TabsTrigger value="products"><Package className="w-4 h-4"/> Products</TabsTrigger>
            <TabsTrigger value="categories"><Layers className="w-4 h-4"/> Categories</TabsTrigger>
            <TabsTrigger value="inquiries"><MessageSquare className="w-4 h-4"/> Inquiries</TabsTrigger>
          </TabsList>

          {/* PRODUCTS */}
          <TabsContent value="products">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="md:col-span-1 h-fit">
                <CardHeader>
                  <CardTitle>Add Product</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddProduct} className="space-y-4">
                    <Select value={newProduct.categoryId} onValueChange={(val) => setNewProduct({...newProduct, categoryId: val})}>
                      <SelectTrigger><SelectValue placeholder="Select Category"/></SelectTrigger>
                      <SelectContent>
                        {categories.map(c => <SelectItem key={c.id} value={c.id}>{c.label}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <Input placeholder="Product Name" value={newProduct.name} onChange={e => setNewProduct({...newProduct, name:e.target.value})}/>
                    <Input placeholder="Sub Category" value={newProduct.subCategory} onChange={e => setNewProduct({...newProduct, subCategory:e.target.value})}/>
                    <Textarea placeholder="Description" value={newProduct.description} onChange={e => setNewProduct({...newProduct, description:e.target.value})}/>
                    <Input placeholder="Image URL" value={newProduct.image} onChange={e => setNewProduct({...newProduct, image:e.target.value})}/>
                    <Button type="submit" className="w-full"><Plus className="w-4 h-4"/> Add Product</Button>
                  </form>
                </CardContent>
              </Card>

              {/* Product List */}
              <Card className="md:col-span-2">
                <CardHeader><CardTitle>Products</CardTitle></CardHeader>
                <CardContent>
                  {categories.map(cat => (
                    <div key={cat.id} className="mb-4">
                      <h3 className="font-bold flex items-center gap-2">
                        <img src={cat.image} className="w-10 h-10 rounded-full object-cover" alt={cat.label}/>
                        {cat.label}
                      </h3>
                      {(categoryProducts[cat.id] || []).map(prod => (
                        <div key={prod.name} className="flex justify-between items-center p-2 border rounded mb-2">
                          <div className="flex gap-2 items-center">
                            <img src={prod.image} className="w-10 h-10 rounded"/>
                            <div>
                              <p>{prod.name}</p>
                              <p className="text-xs">{prod.subCategory}</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" onClick={() => setEditingProduct({...prod, categoryId:cat.id})}><Edit className="w-4 h-4"/> Edit</Button>
                            <Button size="sm" variant="destructive" onClick={()=>removeProduct(cat.id, prod.name)}><Trash2 className="w-4 h-4"/></Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}

                  {editingProduct && (
                    <Card className="p-4 bg-yellow-50 mt-4">
                      <h3>Edit Product</h3>
                      <Input value={editingProduct.name} onChange={e=>setEditingProduct({...editingProduct,name:e.target.value})}/>
                      <Input value={editingProduct.subCategory} onChange={e=>setEditingProduct({...editingProduct,subCategory:e.target.value})}/>
                      <Textarea value={editingProduct.description} onChange={e=>setEditingProduct({...editingProduct,description:e.target.value})}/>
                      <Input value={editingProduct.image} onChange={e=>setEditingProduct({...editingProduct,image:e.target.value})}/>
                      <Button onClick={()=>{updateProduct(editingProduct.categoryId, editingProduct); setEditingProduct(null);}}>Save Changes</Button>
                    </Card>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* CATEGORIES */}
          <TabsContent value="categories">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="md:col-span-1 h-fit">
                <CardHeader><CardTitle>Add Category</CardTitle></CardHeader>
                <CardContent>
                  <form onSubmit={handleAddCategory} className="space-y-3">
                    <Input placeholder="Category ID" value={newCategory.id} onChange={e=>setNewCategory({...newCategory,id:e.target.value})}/>
                    <Input placeholder="Label" value={newCategory.label} onChange={e=>setNewCategory({...newCategory,label:e.target.value})}/>
                    <Input placeholder="Image URL" value={newCategory.image} onChange={e=>setNewCategory({...newCategory,image:e.target.value})}/>
                    <Textarea placeholder="Description" value={newCategory.description} onChange={e=>setNewCategory({...newCategory,description:e.target.value})}/>
                    <Button type="submit" className="w-full"><Plus className="w-4 h-4"/> Add Category</Button>
                  </form>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader><CardTitle>Existing Categories</CardTitle></CardHeader>
                <CardContent>
                  {categories.map(cat=>(

                    <div key={cat.id} className="glass-card flex items-center justify-between rounded-xl p-3 mb-2">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg overflow-hidden bg-slate-100 border">
                          {cat.image && <img src={cat.image} alt={cat.label} className="h-full w-full object-cover"/>}
                        </div>
                        <div>
                          <div className="font-semibold">{cat.label}</div>
                          <div className="text-xs text-slate-500">ID: {cat.id}</div>
                        </div>
                      </div>
                      <Button variant="destructive" size="sm" onClick={()=>removeCategory(cat.id)}><Trash2 className="w-4 h-4"/></Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* INQUIRIES */}
          <TabsContent value="inquiries">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-slate-800">Leads</h2>
              <Button variant="outline" onClick={()=>downloadLeadsCSV(inquiries)} className="flex items-center gap-2">
                <Plus className="w-4 h-4"/> Download CSV
              </Button>
            </div>

            <div className="overflow-x-auto border rounded-lg shadow-sm">
              <Table className="min-w-[1200px] text-sm">
                <TableHeader className="bg-slate-100">
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>fullName</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>mobileNo</TableHead>
                    <TableHead>Country</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Brand</TableHead>
                    <TableHead>Lab Test</TableHead>
                    <TableHead>Certificate</TableHead>
                    <TableHead>Target Price</TableHead>
                    <TableHead>Payment Terms</TableHead>
                    <TableHead>Additional</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inquiries.map(i => (
                    <TableRow key={i.id} className="hover:bg-slate-50 transition-colors duration-200">
                      <TableCell><Badge className="bg-blue-100 text-blue-800">{i.type}</Badge></TableCell>
                      <TableCell>
                        <Badge className={
                          i.status==='pending' ? "bg-yellow-100 text-yellow-800" :
                          i.status==='accepted' ? "bg-green-100 text-green-800" :
                          "bg-red-100 text-red-800"
                        }>
                          {i.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{i.date}</TableCell>
                      <TableCell className="font-medium">{i.fullName}</TableCell>
                      <TableCell className="text-blue-600">{i.email}</TableCell>
                      <TableCell>{i.mobileNo}</TableCell>
                      <TableCell>{i.country}</TableCell>
                      <TableCell>{i.company}</TableCell>
                      <TableCell className="font-medium">{i.productName}</TableCell>
                      <TableCell>{i.quantity}</TableCell>
                      <TableCell>{i.brand}</TableCell>
                      <TableCell>{i.labTest}</TableCell>
                      <TableCell>{i.certificate}</TableCell>
                      <TableCell>{i.targetPrice}</TableCell>
                      <TableCell>{i.paymentTerms}</TableCell>
                      <TableCell>{i.additionalRequirements}</TableCell>
                      <TableCell className="text-right">
                        {i.status==='pending' && 
                          <Button size="sm" className="bg-green-600 hover:bg-green-700 transition-colors duration-200 flex items-center gap-1" onClick={()=>acceptInquiry(i.id)}>
                            <CheckCircle className="w-3 h-3"/> Accept
                          </Button>
                        }
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

        </Tabs>
      </div>
    </div>
  );
}
