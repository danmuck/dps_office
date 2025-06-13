import UserMetricsModule from "./@users/page";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col gap-4 p-4">
            {children}
            <header className="text-2xl font-bold">Dashboard</header>

            <main className="flex gap-8">

                <div className="flex-col p-4 border rounded-lg">
                    <UserMetricsModule />
                    <UserMetricsModule />
                </div>

                <div className="flex p-4 border rounded-lg">
                    <UserMetricsModule />
                    <UserMetricsModule />
                </div>

            </main>
        </div>
    );
}
