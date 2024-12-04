import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusCircle } from "lucide-react";

export default function Dashboard() {
  return (
    <main className="mx-auto flex h-full max-w-5xl flex-col gap-8 p-8">
      <div className="flex items-end justify-between">
        <h1 className="text-5xl font-bold">Dashboard</h1>
        <Button asChild variant="ghost">
          <Link href="/invoices/new">
            <PlusCircle />
            New Invoice
          </Link>
        </Button>
      </div>
      <hr />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-left">Date</TableHead>
            <TableHead className="text-left">Customer</TableHead>
            <TableHead className="text-left">E-mail</TableHead>
            <TableHead className="text-left">Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-left">04/12/2024</TableCell>
            <TableCell className="text-left">John Doe</TableCell>
            <TableCell className="text-left">johndoe@gmail.com</TableCell>
            <TableCell className="text-left">
              <Badge color="primary">Open</Badge>
            </TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}
