import DashboardLayout from "@/components/layouts/DashboardLayout";
import Login from "@/components/views/Auth/Login";
import Dashboard from "@/components/views/Admin/Dashboard";

const DashboardAdminPage = () => {
    return (
        <DashboardLayout title="Dashboard" description="Dashboard Admin" type="admin">
            <Dashboard />
        </DashboardLayout>
    );
};

export default DashboardAdminPage;