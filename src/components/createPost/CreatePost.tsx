import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; 
import styles from "@/components/latestPosts/latestPosts.module.css";

const allTags = [
    "american",
    "classic",
    "crime",
    "english",
    "fiction",
    "french",
    "history",
    "love",
    "magical",
    "mystery"
];

const postSchema = z.object({
  title: z.string().min(1, "Title is required"),
  body: z.string().min(1, "Body is required"),
});

export default function CreatePost() {
  const form = useForm<z.infer<typeof postSchema>>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: "",
      body: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data: z.infer<typeof postSchema>) => {
    console.log(data);
    navigate(-1);
  };

  return (
    <Dialog
      defaultOpen
      onOpenChange={(open) => {
        if (!open) navigate(-1);
      }}
    >
      <DialogContent className={styles.dialog}>
        <DialogDescription className="sr-only">
          Create new post form
        </DialogDescription>
        <DialogHeader>
          <DialogTitle className={styles.DialogTitle}>
            Create Post
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="mb-8">
                  <FormControl>
                    <Input placeholder="Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="body"
              render={({ field }) => (
                <FormItem className="mb-8">
                  <FormControl>
                    <Textarea
                      placeholder="What's on your mind?"
                      className={styles.body}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="submit" className={styles.create_post_button}>
                Post
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
