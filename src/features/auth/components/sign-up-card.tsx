import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { SignInFlow } from "../types";

interface SignUpCardProps {
    setState: (state:SignInFlow) => void;
}

export const SignUpCard = ({setState}:SignUpCardProps) => {

    return (
        <Card className="p-8">
            <CardHeader className="px-0 pt-0">
                <CardTitle>
                Sign up
                </CardTitle>
                <CardDescription>
                    Use your email or another services to continue
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-5 px-0 pb-0">
                <form className="space-y-2.5">
                    <Input 
                        disabled={false}
                        value=""
                        onChange={()=>{}}
                        placeholder="Email"
                        type="email"
                        required
                        />
                        
                    <Input 
                        disabled={false}
                        value=""
                        onChange={()=>{}}
                        placeholder="Password"
                        type="password"
                        required
                        />

                    <Button type="submit" size="lg" className="w-full" disabled={false} >
                        Continue
                    </Button>
                </form>
                <Separator/>
                <div className="space-y-2.5 flex flex-col">
                    <Button
                        disabled={false}
                        onClick={()=>{}}
                        variant={"outline"}
                        size="lg"
                        className="w-full relative"
                    >
                        <FcGoogle className="size-5 absolute top-3 left-3"/>
                        Continue with Google
                    </Button>
                    <Button
                        disabled={false}
                        onClick={()=>{}}
                        variant={"outline"}
                        size="lg"
                        className="w-full relative"
                    >
                        <FaGithub className="size-5 absolute top-3 left-3"/>
                        Continue with Github
                    </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                    Already have an account? <span
                        className="text-sky-700 hover:underline cursor-pointer"
                        onClick={()=> {setState("signIn")}}    
                            >Sign in
                        </span>
                </p>
                    
            </CardContent>
        </Card>
    );
};  