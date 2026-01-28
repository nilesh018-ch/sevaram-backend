import { useState } from "react";
import { useLocation } from "wouter";
import { useStore } from "@/context/StoreContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Trash2, CheckCircle, LogOut, Plus, Package, MessageSquare, Layers } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";

export default function AdminDashboard() {
  const { 
    isAdmin, logout, 
    categories, categoryProducts, 
    addProduct, removeProduct,
    addCategory, removeCategory,
    inquiries, acceptInquiry 
  } = useStore();
  const [, setLocation] = useLocation();

  if (!isAdmin) {
    setLocation("/admin");
    return null;
  }

  // State for new product form
  const [newProduct, setNewProduct] = useState({
    categoryId: "",
    name: "",
    price: "Enquire",
    image: "",
    description: "",
    subCategory: ""
  });

  // State for new category form
  const [newCategory, setNewCategory] = useState({
    id: "",
    label: "",
    image: "",
    count: "0 Products",
    description: ""
  });

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduct.categoryId || !newProduct.name) return;
    
    addProduct(newProduct.categoryId, {
      name: newProduct.name,
      price: newProduct.price,
      image: newProduct.image || "https://placehold.co/400",
      description: newProduct.description,
      subCategory: newProduct.subCategory
    });

    setNewProduct({ ...newProduct, name: "", description: "", image: "" });
    alert("Product added successfully!");
  };

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCategory.id || !newCategory.label) return;

    addCategory({
      ...newCategory,
      count: "0 Products"
    });

    setNewCategory({ id: "", label: "", image: "", count: "0 Products", description: "" });
    alert("Category added successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
            <p className="text-slate-600">Manage products, categories, and inquiries.</p>
          </div>
          <Button variant="outline" className="gap-2" onClick={() => { logout(); setLocation("/admin"); }}>
            <LogOut className="w-4 h-4" /> Logout
          </Button>
        </div>

        <Tabs defaultValue="products" className="space-y-6">
          <TabsList className="bg-white border p-1">
            <TabsTrigger value="products" className="gap-2"><Package className="w-4 h-4" /> Products</TabsTrigger>
            <TabsTrigger value="categories" className="gap-2"><Layers className="w-4 h-4" /> Categories</TabsTrigger>
            <TabsTrigger value="inquiries" className="gap-2"><MessageSquare className="w-4 h-4" /> Inquiries</TabsTrigger>
          </TabsList>

          {/* PRODUCTS TAB */}
          <TabsContent value="products">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Add Product Form */}
              <Card className="md:col-span-1 h-fit">
                <CardHeader>
                  <CardTitle>Add New Product</CardTitle>
                  <CardDescription>Add a product to an existing category.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddProduct} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Select Category</label>
                      <Select 
                        value={newProduct.categoryId} 
                        onValueChange={(val) => setNewProduct({...newProduct, categoryId: val})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map(cat => (
                            <SelectItem key={cat.id} value={cat.id}>{cat.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Product Name</label>
                      <Input 
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                        placeholder="e.g. Bamboo Basket"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Sub-Category</label>
                      <Input 
                        value={newProduct.subCategory}
                        onChange={(e) => setNewProduct({...newProduct, subCategory: e.target.value})}
                        placeholder="e.g. Home Decor"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Description</label>
                      <Textarea 
                        value={newProduct.description}
                        onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                        placeholder="Product details..."
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Image URL</label>
                      <Input 
                        value={newProduct.image}
                        onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                        placeholder="https://..."
                      />
                    </div>

                    <Button type="submit" className="w-full gap-2"><Plus className="w-4 h-4" /> Add Product</Button>
                  </form>
                </CardContent>
              </Card>

              {/* Product List */}
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Product List</CardTitle>
                  <CardDescription>View and remove products.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="max-h-[600px] overflow-y-auto">
                    {categories.map(cat => (
                      <div key={cat.id} className="mb-6">
                        <h3 className="font-bold text-lg mb-3 sticky top-0 bg-white py-2 border-b">{cat.label}</h3>
                        <div className="space-y-2">
                          {categoryProducts[cat.id]?.map((prod, idx) => (
                            <div key={idx} className="flex justify-between items-center p-3 bg-slate-50 rounded border hover:bg-slate-100 transition-colors">
                              <div className="flex items-center gap-3">
                                <img src={prod.image} alt={prod.name} className="w-10 h-10 rounded object-cover" />
                                <div>
                                  <p className="font-medium">{prod.name}</p>
                                  <p className="text-xs text-slate-500">{prod.subCategory}</p>
                                </div>
                              </div>
                              <Button 
                                variant="destructive" 
                                size="sm" 
                                onClick={() => removeProduct(cat.id, prod.name)}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          ))}
                          {(!categoryProducts[cat.id] || categoryProducts[cat.id].length === 0) && (
                            <p className="text-sm text-slate-400 italic">No products in this category.</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* CATEGORIES TAB */}
          <TabsContent value="categories">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="md:col-span-1 h-fit">
                <CardHeader>
                  <CardTitle>Add New Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddCategory} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Category ID (unique)</label>
                      <Input 
                        value={newCategory.id}
                        onChange={(e) => setNewCategory({...newCategory, id: e.target.value.toLowerCase().replace(/\s/g, '-')})}
                        placeholder="e.g. electronics"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Label</label>
                      <Input 
                        value={newCategory.label}
                        onChange={(e) => setNewCategory({...newCategory, label: e.target.value})}
                        placeholder="e.g. Electronics"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Description</label>
                      <Textarea 
                        value={newCategory.description}
                        onChange={(e) => setNewCategory({...newCategory, description: e.target.value})}
                      />
                    </div>
                    <Button type="submit" className="w-full gap-2"><Plus className="w-4 h-4" /> Add Category</Button>
                  </form>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {categories.map(cat => (
                      <div key={cat.id} className="flex justify-between items-center p-4 bg-white border rounded shadow-sm">
                        <div>
                          <h3 className="font-bold">{cat.label}</h3>
                          <p className="text-xs text-slate-500">ID: {cat.id}</p>
                        </div>
                        <Button 
                          variant="destructive" 
                          size="sm"
                          onClick={() => {
                            if(confirm("Are you sure? This will delete all products in this category.")) {
                              removeCategory(cat.id);
                            }
                          }}
                        >
                          <Trash2 className="w-4 h-4" /> Remove
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* INQUIRIES TAB */}
          <TabsContent value="inquiries">
            <Card>
              <CardHeader>
                <CardTitle>Inquiries</CardTitle>
                <CardDescription>Manage incoming business inquiries.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Name / Company</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {inquiries.map((inq) => (
                      <TableRow key={inq.id}>
                        <TableCell>
                          <Badge variant={inq.status === 'accepted' ? 'default' : 'secondary'}>
                            {inq.status === 'accepted' ? 'Accepted' : 'Pending'}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-slate-500">{inq.date}</TableCell>
                        <TableCell>
                          <div className="font-medium">{inq.name}</div>
                          <div className="text-xs text-slate-500">{inq.company}</div>
                          <div className="text-xs text-blue-600">{inq.email}</div>
                        </TableCell>
                        <TableCell className="max-w-md truncate" title={inq.message}>
                          {inq.message}
                        </TableCell>
                        <TableCell className="text-right">
                          {inq.status === 'pending' && (
                            <Button size="sm" className="gap-2 bg-green-600 hover:bg-green-700" onClick={() => acceptInquiry(inq.id)}>
                              <CheckCircle className="w-3 h-3" /> Accept
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                    {inquiries.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-8 text-slate-500">
                          No inquiries found.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
