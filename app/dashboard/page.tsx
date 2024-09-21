"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Bell, CreditCard, DollarSign, Home, LayoutDashboard, Moon, Search, Settings, Sun, Users } from "lucide-react"
import { Area, AreaChart, Bar, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { name: "Jan", revenue: 4000, users: 2400, amt: 2400 },
  { name: "Feb", revenue: 3000, users: 1398, amt: 2210 },
  { name: "Mar", revenue: 2000, users: 9800, amt: 2290 },
  { name: "Apr", revenue: 2780, users: 3908, amt: 2000 },
  { name: "May", revenue: 1890, users: 4800, amt: 2181 },
  { name: "Jun", revenue: 2390, users: 3800, amt: 2500 },
  { name: "Jul", revenue: 3490, users: 4300, amt: 2100 },
]

const pieData = [
  { name: "Basic", value: 400 },
  { name: "Pro", value: 300 },
  { name: "Enterprise", value: 300 },
]

export default function Component() {
  const [openModal, setOpenModal] = useState("")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 74.08 86.05"
                className="h-6 w-6"
                aria-label="Save Money Logo"
              >
                <g fill="none" fillRule="evenodd">
                  <polygon points="60.43 42.44 61.94 42.82 63.26 43.6 64.26 44.8 65.65 45.5 66.56 46.74 67.63 47.81 68.78 48.84 69.38 50.27 70.34 51.46 70.77 52.93 71.31 54.34 71.86 55.73 72.72 57.05 72.61 58.63 73.17 60.07 73.14 61.59 73.24 63.1 73.25 64.62 73.18 66.14 72.59 67.57 72.4 69.08 71.93 70.52 71.32 71.9 70.83 73.35 69.89 74.56 69.14 75.87 68.45 77.24 67.18 78.14 66.26 79.34 65.33 80.58 64.11 81.49 62.69 82.1 61.57 83.17 60.24 83.92 58.69 84.17 57.33 84.85 55.89 85.33 54.36 85.37 52.91 85.83 51.41 86.05 49.89 85.85 48.38 85.91 46.84 86 45.36 85.64 43.92 85.13 42.53 84.53 40.98 84.35 39.64 83.62 38.42 82.7 37.06 82.02 35.98 80.94 34.56 80.27 33.7 78.98 32.57 77.97 31.51 76.87 30.79 75.53 30.01 74.23 29.26 72.92 28.73 71.5 28.06 70.13 27.92 68.6 27.59 67.14 27.37 65.66 27 64.18 27.19 62.67 26.95 61.15 27.3 59.66 27.56 58.18 27.89 56.71 28.21 55.22 29.04 53.92 29.52 52.49 30.37 51.23 31.02 49.87 31.78 48.54 32.95 47.55 33.98 46.45 34.88 45.19 36.1 44.27 37.5 43.62 38.68 42.65 40.09 42.07 41.52 41.59 42.89 40.93 44.31 40.37 45.85 40.36 47.3 39.85 48.81 39.66 50.32 39.95 51.83 39.88 53.37 39.8 54.82 40.31 56.26 40.75 57.67 41.28 59.15 41.63 60.43 42.44" fill="#1c62fd"/>
                  <polygon points="57.11 40.76 58.62 41.15 59.94 41.92 60.94 43.13 62.33 43.82 63.24 45.07 64.31 46.13 65.46 47.16 66.06 48.59 67.02 49.78 67.45 51.26 67.99 52.66 68.54 54.05 69.4 55.38 69.3 56.95 69.85 58.39 69.82 59.92 69.92 61.42 69.93 62.94 69.86 64.46 69.27 65.9 69.08 67.4 68.61 68.84 68 70.22 67.52 71.67 66.57 72.88 65.82 74.19 65.13 75.56 63.86 76.47 62.94 77.67 62.02 78.91 60.79 79.82 59.37 80.43 58.25 81.5 56.92 82.25 55.37 82.5 54.01 83.18 52.57 83.65 51.04 83.69 49.59 84.16 48.09 84.38 46.57 84.18 45.06 84.24 43.52 84.33 42.04 83.96 40.6 83.45 39.21 82.85 37.66 82.67 36.32 81.94 35.1 81.02 33.74 80.35 32.66 79.26 31.24 78.59 30.38 77.3 29.25 76.29 28.19 75.2 27.47 73.85 26.69 72.56 25.94 71.24 25.41 69.82 24.74 68.46 24.6 66.93 24.28 65.46 24.06 63.98 23.68 62.5 23.87 60.99 23.63 59.47 23.98 57.99 24.24 56.5 24.57 55.03 24.89 53.55 25.72 52.25 26.2 50.81 27.05 49.56 27.7 48.19 28.46 46.86 29.63 45.87 30.66 44.77 31.57 43.51 32.78 42.59 34.18 41.94 35.36 40.98 36.77 40.4 38.2 39.91 39.57 39.25 40.99 38.7 42.53 38.68 43.98 38.18 45.49 37.98 47 38.28 48.51 38.2 50.05 38.12 51.5 38.63 52.94 39.08 54.35 39.6 55.83 39.95 57.11 40.76" fill="#98b7ff"/>
                </g>
              </svg>
              <span className="">Acme Inc</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <Users className="h-4 w-4" />
                Users
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <CreditCard className="h-4 w-4" />
                Billing
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <Settings className="h-4 w-4" />
                Settings
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 74.08 86.05"
              className="h-6 w-6"
              aria-label="Save Money Logo"
            >
              <g fill="none" fillRule="evenodd">
                <polygon points="60.43 42.44 61.94 42.82 63.26 43.6 64.26 44.8 65.65 45.5 66.56 46.74 67.63 47.81 68.78 48.84 69.38 50.27 70.34 51.46 70.77 52.93 71.31 54.34 71.86 55.73 72.72 57.05 72.61 58.63 73.17 60.07 73.14 61.59 73.24 63.1 73.25 64.62 73.18 66.14 72.59 67.57 72.4 69.08 71.93 70.52 71.32 71.9 70.83 73.35 69.89 74.56 69.14 75.87 68.45 77.24 67.18 78.14 66.26 79.34 65.33 80.58 64.11 81.49 62.69 82.1 61.57 83.17 60.24 83.92 58.69 84.17 57.33 84.85 55.89 85.33 54.36 85.37 52.91 85.83 51.41 86.05 49.89 85.85 48.38 85.91 46.84 86 45.36 85.64 43.92 85.13 42.53 84.53 40.98 84.35 39.64 83.62 38.42 82.7 37.06 82.02 35.98 80.94 34.56 80.27 33.7 78.98 32.57 77.97 31.51 76.87 30.79 75.53 30.01 74.23 29.26 72.92 28.73 71.5 28.06 70.13 27.92 68.6 27.59 67.14 27.37 65.66 27 64.18 27.19 62.67 26.95 61.15 27.3 59.66 27.56 58.18 27.89 56.71 28.21 55.22 29.04 53.92 29.52 52.49 30.37 51.23 31.02 49.87 31.78 48.54 32.95 47.55 33.98 46.45 34.88 45.19 36.1 44.27 37.5 43.62 38.68 42.65 40.09 42.07 41.52 41.59 42.89 40.93 44.31 40.37 45.85 40.36 47.3 39.85 48.81 39.66 50.32 39.95 51.83 39.88 53.37 39.8 54.82 40.31 56.26 40.75 57.67 41.28 59.15 41.63 60.43 42.44" fill="#1c62fd"/>
                <polygon points="57.11 40.76 58.62 41.15 59.94 41.92 60.94 43.13 62.33 43.82 63.24 45.07 64.31 46.13 65.46 47.16 66.06 48.59 67.02 49.78 67.45 51.26 67.99 52.66 68.54 54.05 69.4 55.38 69.3 56.95 69.85 58.39 69.82 59.92 69.92 61.42 69.93 62.94 69.86 64.46 69.27 65.9 69.08 67.4 68.61 68.84 68 70.22 67.52 71.67 66.57 72.88 65.82 74.19 65.13 75.56 63.86 76.47 62.94 77.67 62.02 78.91 60.79 79.82 59.37 80.43 58.25 81.5 56.92 82.25 55.37 82.5 54.01 83.18 52.57 83.65 51.04 83.69 49.59 84.16 48.09 84.38 46.57 84.18 45.06 84.24 43.52 84.33 42.04 83.96 40.6 83.45 39.21 82.85 37.66 82.67 36.32 81.94 35.1 81.02 33.74 80.35 32.66 79.26 31.24 78.59 30.38 77.3 29.25 76.29 28.19 75.2 27.47 73.85 26.69 72.56 25.94 71.24 25.41 69.82 24.74 68.46 24.6 66.93 24.28 65.46 24.06 63.98 23.68 62.5 23.87 60.99 23.63 59.47 23.98 57.99 24.24 56.5 24.57 55.03 24.89 53.55 25.72 52.25 26.2 50.81 27.05 49.56 27.7 48.19 28.46 46.86 29.63 45.87 30.66 44.77 31.57 43.51 32.78 42.59 34.18 41.94 35.36 40.98 36.77 40.4 38.2 39.91 39.57 39.25 40.99 38.7 42.53 38.68 43.98 38.18 45.49 37.98 47 38.28 48.51 38.2 50.05 38.12 51.5 38.63 52.94 39.08 54.35 39.6 55.83 39.95 57.11 40.76" fill="#98b7ff"/>
              </g>
            </svg>
            <span className="sr-only">Home</span>
          </Link>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </form>
          </div>
          <Button
            className="rounded-full"
            size="icon"
            variant="ghost"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button className="rounded-full" size="icon" variant="ghost">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
          <Button className="rounded-full" size="icon" variant="ghost">
            <img
              alt="Avatar"
              className="rounded-full"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Dashboard</h1>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Dialog open={openModal === "revenue"} onOpenChange={() => setOpenModal(openModal === "revenue" ? "" : "revenue")}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$45,231.89</div>
                    <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Revenue Details</DialogTitle>
                </DialogHeader>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </DialogContent>
            </Dialog>
            <Dialog open={openModal === "subscriptions"} onOpenChange={() => setOpenModal(openModal === "subscriptions" ? "" : "subscriptions")}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+2350</div>
                    <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Subscription Details</DialogTitle>
                </DialogHeader>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie dataKey="value" data={pieData} fill="#8884d8" label />
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </DialogContent>
            </Dialog>
            <Dialog open={openModal === "sales"} onOpenChange={() => setOpenModal(openModal === "sales" ? "" : "sales")}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Sales</CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+12,234</div>
                    <p className="text-xs text-muted-foreground">+19% from last month</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Sales Details</DialogTitle>
                </DialogHeader>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                      <Line type="monotone" dataKey="users" stroke="#82ca9d" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </DialogContent>
            </Dialog>
            <Dialog open={openModal === "active"} onOpenChange={() => setOpenModal(openModal === "active" ? "" : "active")}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+573</div>
                    <p className="text-xs text-muted-foreground">+201 since last hour</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Active Users Details</DialogTitle>
                </DialogHeader>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={data}>
                      <CartesianGrid stroke="#f5f5f5" />
                      <XAxis dataKey="name" scale="band" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="users" barSize={20} fill="#413ea0" />
                      <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Invoice</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">#INV001</TableCell>
                      <TableCell>Paid</TableCell>
                      <TableCell>Credit Card</TableCell>
                      <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">#INV002</TableCell>
                      <TableCell>Pending</TableCell>
                      <TableCell>PayPal</TableCell>
                      <TableCell className="text-right">$150.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">#INV003</TableCell>
                      <TableCell>Unpaid</TableCell>
                      <TableCell>Bank Transfer</TableCell>
                      <TableCell className="text-right">$350.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">#INV004</TableCell>
                      <TableCell>Paid</TableCell>
                      <TableCell>Credit Card</TableCell>
                      <TableCell className="text-right">$450.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">#INV005</TableCell>
                      <TableCell>Paid</TableCell>
                      <TableCell>PayPal</TableCell>
                      <TableCell className="text-right">$550.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="flex items-center">
                    <span className="relative flex h-2 w-2 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                    </span>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">New sale: $250.00</p>
                      <p className="text-sm text-muted-foreground">2 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="relative flex h-2 w-2 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                    </span>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">New user registered</p>
                      <p className="text-sm text-muted-foreground">5 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="relative flex h-2 w-2 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                    </span>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">New subscription: Pro Plan</p>
                      <p className="text-sm text-muted-foreground">10 minutes ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}