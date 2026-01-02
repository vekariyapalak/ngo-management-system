import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DollarSign, ShoppingCart, TrendingUp, Users } from "lucide-react";

// Add sample users data
const recentUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    avatar: "/avatars/01.png",
    status: "Active",
    joinedDate: "2024-03-20",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    avatar: "/avatars/02.png",
    status: "Offline",
    joinedDate: "2024-03-19",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    avatar: "/avatars/03.png",
    status: "Active",
    joinedDate: "2024-03-18",
  },
  {
    id: 4,
    name: "Sarah Williams",
    email: "sarah@example.com",
    avatar: "/avatars/04.png",
    status: "Active",
    joinedDate: "2024-03-17",
  },
];

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-card rounded-lg shadow-sm border border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Users</p>
              <h3 className="text-2xl font-bold text-foreground">2,543</h3>
              <p className="text-xs text-green-600 mt-1">+12.5% from last month</p>
            </div>
            <div className="p-3 bg-primary/10 rounded-full">
              <Users className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>

        <div className="p-6 bg-card rounded-lg shadow-sm border border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Revenue</p>
              <h3 className="text-2xl font-bold text-foreground">$45,231</h3>
              <p className="text-xs text-green-600 mt-1">+8.2% from last month</p>
            </div>
            <div className="p-3 bg-primary/10 rounded-full">
              <DollarSign className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>

        <div className="p-6 bg-card rounded-lg shadow-sm border border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Orders</p>
              <h3 className="text-2xl font-bold text-foreground">1,345</h3>
              <p className="text-xs text-red-600 mt-1">-3.2% from last month</p>
            </div>
            <div className="p-3 bg-primary/10 rounded-full">
              <ShoppingCart className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>

        <div className="p-6 bg-card rounded-lg shadow-sm border border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Conversion Rate</p>
              <h3 className="text-2xl font-bold text-foreground">3.8%</h3>
              <p className="text-xs text-green-600 mt-1">+4.5% from last month</p>
            </div>
            <div className="p-3 bg-primary/10 rounded-full">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>
      </div>


      {/* Recent Users Table */}
      <div className="bg-card rounded-lg shadow-sm border border-border">
        <div className="p-4 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">Recent Users</h2>
          <p className="text-sm text-muted-foreground">A list of recently joined users.</p>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Joined Date</TableHead>
              <TableHead>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-foreground">{user.name}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${user.status === 'Active'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                    }`}>
                    {user.status}
                  </span>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">
                  {new Date(user.joinedDate).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">
                  {user.email}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Dashboard;
