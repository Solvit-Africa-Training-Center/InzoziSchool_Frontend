import { useMemo, useState } from "react";
import { Table } from "./AdminTable"; // adjust path if AdminTable lives elsewhere
import type { Column } from "./AdminTable";
import {
  useGetAllSchoolsQuery,
  useApproveSchoolMutation,
  useRejectSchoolMutation,
  useDeleteSchoolMutation,
  type schooldetail,
} from "../../App/api/school/school"; // adjust path

// ── Badges ───────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: schooldetail["status"] }) {
  const className =
    status === "approved"
      ? "bg-[#F09C00] text-white"
      : status === "rejected"
      ? "bg-[#EF4343] text-white"
      : "bg-gray-400 text-white";
  return (
    <span
      className={`inline-block text-center px-2 py-1 rounded-full text-xs font-medium capitalize ${className}`}
      style={{ width: "100px" }}
    >
      {status}
    </span>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────

const STATUS_TABS = ["All Status", "Pending", "Approved", "Rejected"] as const;

export default function SuperAdminSchool() {
  const { data, isLoading, isFetching } = useGetAllSchoolsQuery();
  const [approveSchool] = useApproveSchoolMutation();
  const [rejectSchool] = useRejectSchoolMutation();
  const [deleteSchool] = useDeleteSchoolMutation();

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Types");
  const [statusFilter, setStatusFilter] = useState<(typeof STATUS_TABS)[number]>("All Status");

  const rawData = data as any;
  const schools: schooldetail[] = Array.isArray(rawData?.data)
    ? rawData.data
    : Array.isArray(rawData?.data?.schools)
    ? rawData.data.schools
    : Array.isArray(rawData?.schools)
    ? rawData.schools
    : [];

  // TEMP: log this once to confirm the real shape, then remove
  console.log("Schools API response:", data);

  const categoryOptions = useMemo(
    () => Array.from(new Set(schools.map((s) => s.schoolCategory).filter(Boolean))),
    [schools]
  );

  const filteredSchools = useMemo(() => {
    return schools.filter((s) => {
      const matchesSearch =
        !searchTerm ||
        s.schoolName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.district.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === "All Types" || s.schoolCategory === categoryFilter;
      const matchesStatus =
        statusFilter === "All Status" || s.status === statusFilter.toLowerCase();
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [schools, searchTerm, categoryFilter, statusFilter]);

  const handleApprove = async (school: schooldetail) => {
    if (!window.confirm(`Approve ${school.schoolName}?`)) return;
    try {
      await approveSchool(school.id).unwrap();
    } catch (err) {
      console.error(err);
      alert("Failed to approve school.");
    }
  };

  const handleReject = async (school: schooldetail) => {
    const reason = window.prompt(`Reason for rejecting ${school.schoolName}:`);
    if (!reason) return;
    try {
      await rejectSchool({ id: school.id, message: reason }).unwrap();
    } catch (err) {
      console.error(err);
      alert("Failed to reject school.");
    }
  };

  const handleDelete = async (school: schooldetail) => {
    if (!window.confirm(`Delete ${school.schoolName}? This cannot be undone.`)) return;
    try {
      await deleteSchool(school.id).unwrap();
    } catch (err) {
      console.error(err);
      alert("Failed to delete school.");
    }
  };

  const columns: Column<schooldetail>[] = [
    {
      key: "schoolName",
      label: "School",
      render: (row) => <div className="font-medium text-gray-900">{row.schoolName}</div>,
    },
    { key: "schoolCategory", label: "Category" },
    { key: "schoolLevel", label: "Level" },
    { key: "district", label: "District" },
    {
      key: "manager",
      label: "Manager",
      render: (row) =>
        row.SchoolManager ? (
          <span>
            {row.SchoolManager.firstName} {row.SchoolManager.lastName}
          </span>
        ) : (
          "—"
        ),
    },
    { key: "email", label: "Email" },
    {
      key: "status",
      label: "Status",
      render: (row) => <StatusBadge status={row.status} />,
    },
    {
      key: "actions",
      label: "Actions",
      render: (row) => (
        <div className="flex items-center gap-2">
          {row.status === "pending" && (
            <>
              <button
                onClick={() => handleApprove(row)}
                className="bg-[#F09C00] text-white px-3 py-1 rounded text-xs font-medium"
                style={{ width: "90px" }}
              >
                Approve
              </button>
              <button
                onClick={() => handleReject(row)}
                className="bg-[#EF4343] hover:bg-red-600 text-white px-3 py-1 rounded text-xs font-medium"
                style={{ width: "90px" }}
              >
                Reject
              </button>
            </>
          )}
          <button
            onClick={() => handleDelete(row)}
            className="border border-red-200 text-red-500 hover:bg-red-50 px-3 py-1 rounded text-xs font-medium"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#ffffff] to-[#CFDCEA] min-h-screen">
      <h1 className="pl-6 md:pl-[60px] text-2xl md:text-[36px] font-family-playfair text-[#282C34] font-bold py-2 pt-6">
        School Profiles
      </h1>
      <p className="pl-6 md:pl-[60px] text-gray-400 text-[14px] font-family-poppins">
        Browse and manage all registered school profiles
      </p>

      <div className="py-5 px-6 md:pl-[60px] md:pr-[60px] flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-[30px]">
        <input
          type="text"
          placeholder="Search School or Location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-[340px] px-3 focus:outline-none rounded-sm bg-white text-[12px] py-2 border border-[#E5E7EB]"
        />

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="w-full sm:w-[200px] px-3 focus:outline-none rounded-sm bg-white text-[12px] py-2 border border-[#E5E7EB]"
        >
          <option>All Types</option>
          {categoryOptions.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as (typeof STATUS_TABS)[number])}
          className="w-full sm:w-[240px] px-3 focus:outline-none rounded-sm bg-white text-[12px] py-2 border border-[#E5E7EB]"
        >
          {STATUS_TABS.map((tab) => (
            <option key={tab}>{tab}</option>
          ))}
        </select>
      </div>

      <div className="py-4 px-6 md:px-0 md:pl-[60px] md:pr-[60px]">
        <Table
          columns={columns}
          data={filteredSchools}
          itemsPerPage={6}
          isLoading={isLoading || isFetching}
        />
      </div>
    </div>
  );
}