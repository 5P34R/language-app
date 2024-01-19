import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function About() {
    return (
        <section className="w-full">
            <div className="flex justify-center items-center h-screen">
            <Card className="md:w-2/3 md:h-2/3 shadow-xl">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl">ABOUT US</CardTitle>
                    {/* <CardDescription>Card Description</CardDescription> */}
                </CardHeader>
                <CardContent className="my-3">
                    <p className="text-gray-500">How can we provide the people arriving in our city with all relevant information in their language as quickly as possible? Without permanent internet access and without confusing paper chaos? We also asked ourselves these questions in 2015. The result is Integreat, an effective and low-threshold solution. A digital platform that provides all relevant information in several languages at the municipal level to newly arrived migrants and refugees. We started with the idea under the project name Refguide+. In the meantime, Integreat is more than just an idea and a theoretical concept. It is a digital integration platform for cities, districts and federal states that want to break down language barriers and create information transparency. The focus is on all people with a migration background – regardless of whether they have been forced to come to a new country and a new culture by fleeing or have come voluntarily (keyword: labour migration/ skilled workers). Our digital solution is intended to support the integration process and also serve as a basis for further activities and measures in this environment. </p>
                </CardContent>
            </Card>
            </div>

        </section>
    )
}