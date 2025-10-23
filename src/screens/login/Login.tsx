import { useCallback } from "react";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
    Form, 
    FormControl,
    FormField, 
    FormItem,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useAppStore } from "@/lib/appStore";
import styles from './login.module.css';

const loginSchema = z.object({
    username: z.string().min(4, 'Username is required, at least 4 characters'),
    password: z.string().min(8, 'Password is required, at least 8 characters'),
});

export default function Login() {
    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: '',
            password: '',            
        }
    });
    const { login } = useAppStore();

    const onLogin = useCallback(async (values: z.infer<typeof loginSchema>) => {
        await login(values);
    }, [login]);

    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold my-6">Welcome Back</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onLogin)}>
                    <FormField
                        control={form.control}
                        name="username"
                        render={(({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Username" className={styles.input} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        ))}
                        />
                        <FormField
                        control={form.control}
                        name="password"
                        render={(({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type="password" placeholder="Password" className={styles.input} {...field} style={{ marginTop: '15px' }}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        ))}
                        />
                        <Button type="submit" className={styles.loginButton} style={{ marginTop: '25px' }}
                        >
                            Sign In

                        </Button>
                        </form>
                    </Form>
             </div>   
    );
}