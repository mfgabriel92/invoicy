"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  billingName: z.string({ required_error: "Billing name is required" }),
  billingEmail: z
    .string({ required_error: "Billing email is required" })
    .email({ message: "Billing email is invalid" }),
  amount: z.number({ required_error: "Amount is required" }),
  description: z.string(),
});

export default function NewInvoicePage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit() {
    console.log(form.getValues());
  }

  return (
    <main className="mx-auto flex h-full max-w-5xl flex-col gap-8 p-8">
      <h2 className="text-5xl font-bold">New Invoice</h2>
      <hr />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            // @ts-ignore
            name="billingName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Billing Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            // @ts-ignore
            name="billingEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Billing E-mail</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            // @ts-ignore
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            // @ts-ignore
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Create</Button>
        </form>
      </Form>
    </main>
  );
}
