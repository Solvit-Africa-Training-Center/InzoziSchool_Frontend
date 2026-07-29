import { useMemo, useState } from "react";
import { FiPlus as Plus, FiSearch as Search, FiEdit as Edit, FiTrash2 as Trash, FiX as X } from "react-icons/fi";
import { Table } from "./AdminTable";
import type { Column } from "./AdminTable";
import {
  useGetAllUsersQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
  type UserRecord,
} from "../../../src/App/api/Auth/UsersApi"; // adjust path
//import { useGetAllApprovedSchoolQuery } from "../../../src/App/api/school/school"; // adjust path
import { useRegistrationMutation } from "../../../src/App/api/Auth/auth";; //  adjust path

// ── Helpers ──────────────────────────────────────────────────────────────

function formatRoleName(name: string) {
  return name.replace(/([a-z])([A-Z])/g, "$1 $2");
}

function RoleBadge({ name }: { name: string }) {
  const label = formatRoleName(name);
  const className =
    name === "Principal" || name === "SchoolManager"
      ? "bg-[#F09C00] text-white"
      : name === "AdmissionManager"
      ? "bg-primary-color text-white"
      : "bg-gray-100 text-gray-800";
  return (
    <span
      className={`inline-block text-center px-2 py-1 rounded-full text-xs font-medium ${className}`}
      style={{ width: "150px" }}
    >
      {label}
    </span>
  );
}

function StatusBadge({ deletedAt }: { deletedAt: string | null }) {
  const active = !deletedAt;
  const className = active ? "bg-[#F09C00] text-white" : "bg-gray-400 text-white";
  return (
    <span
      className={`inline-block text-center px-2 py-1 rounded-full text-xs font-medium ${className}`}
      style={{ width: "90px" }}
    >
      {active ? "Active" : "Inactive"}
    </span>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString();
}

// ── Add/Edit modal ───────────────────────────────────────────────────────

interface UserFormState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;
  province: string;
  district: string;
  schoolId: string;
}

const emptyForm: UserFormState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  gender: "",
  province: "",
  district: "",
  schoolId: "",
};

function UserFormModal({
  mode,
  initial,
  onClose,
  onSubmit,
  isSubmitting,
}: {
  mode: "create" | "edit";
  initial: UserFormState;
  onClose: () => void;
  onSubmit: (form: UserFormState) => void;
  isSubmitting: boolean;
}) {
 const [form, setForm] = useState<UserFormState>(initial);

  const handleChange = (field: keyof UserFormState, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[480px] bg-white rounded-xl shadow-lg overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <h2 className="font-bold text-lg text-gray-900">
            {mode === "create" ? "Add School Manager" : "Update User"}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(form);
          }}
          className="p-5 space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">First Name</label>
              <input
                required
                value={form.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Last Name</label>
              <input
                required
                value={form.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Email</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

         <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Password
              {mode === "edit" && (
                <span className="text-gray-400 font-normal"> (leave blank to keep current password)</span>
              )}
            </label>
            <input
              required={mode === "create"}
              type="password"
              value={form.password}
              onChange={(e) => handleChange("password", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Gender</label>
              <select
                value={form.gender}
                onChange={(e) => handleChange("gender", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">District</label>
              <input
                value={form.district}
                onChange={(e) => handleChange("district", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Province</label>
            <input
              value={form.province}
              onChange={(e) => handleChange("province", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {mode === "create" && (
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
  School ID <span className="text-gray-400 font-normal">(optional)</span>
</label>
              <input
                value={form.schoolId}
                onChange={(e) => handleChange("schoolId", e.target.value)}
                placeholder="Leave blank if not assigning a school yet"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          )}

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-2 rounded-lg bg-[#F09C00] text-white text-sm font-medium disabled:opacity-60"
            >
              {isSubmitting ? "Saving..." : mode === "create" ? "Create" : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────

export default function Users() {
  const { data: usersData, isLoading, isFetching } = useGetAllUsersQuery();
  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();
  const [registerSchoolManager, { isLoading: isCreating }] = useRegistrationMutation();

  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("All Roles");
  const [statusFilter, setStatusFilter] = useState("All Statuses");

  const [modalMode, setModalMode] = useState<"create" | "edit" | null>(null);
  const [editingUser, setEditingUser] = useState<UserRecord | null>(null);

  const users = usersData?.data ?? [];

  const roleOptions = useMemo(
    () => Array.from(new Set(users.map((u) => u.role?.name).filter(Boolean))),
    [users]
  );

  const filteredUsers = useMemo(() => {
    return users.filter((u) => {
      const fullName = `${u.firstName} ${u.lastName}`.toLowerCase();
      const matchesSearch =
        !searchTerm ||
        fullName.includes(searchTerm.toLowerCase()) ||
        u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (u.School?.schoolName ?? "").toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRole = roleFilter === "All Roles" || u.role?.name === roleFilter;
      const matchesStatus =
        statusFilter === "All Statuses" ||
        (statusFilter === "Active" ? !u.deletedAt : !!u.deletedAt);
      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [users, searchTerm, roleFilter, statusFilter]);

  const handleDelete = async (user: UserRecord) => {
    if (!window.confirm(`Delete ${user.firstName} ${user.lastName}? This cannot be undone.`)) return;
    try {
      await deleteUser(user.id).unwrap();
    } catch (err) {
      console.error("Failed to delete user:", err);
      alert("Failed to delete user. Please try again.");
    }
  };

  const handleFormSubmit = async (form: UserFormState) => {
    try {
      if (modalMode === "create") {
        await registerSchoolManager({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          password: form.password,
          gender: form.gender,
          province: form.province,
          district: form.district,
          schoolId: form.schoolId.trim() === "" ? null : form.schoolId.trim(),
        }).unwrap();
     } else if (modalMode === "edit" && editingUser) {
        await updateUser({
          id: editingUser.id,
          data: {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            gender: form.gender,
            province: form.province,
            district: form.district,
            ...(form.password.trim() !== "" ? { password: form.password.trim() } : {}),
          },
        }).unwrap();
      }
      setModalMode(null);
      setEditingUser(null);
    } catch (err) {
      console.error("Failed to save user:", err);
      alert("Something went wrong. Please check the form and try again.");
    }
  };

  const columns: Column<UserRecord>[] = [
    {
      key: "name",
      label: "Name",
      render: (row) => (
        <div className="font-medium text-gray-900">
          {row.firstName} {row.lastName}
        </div>
      ),
    },
    {
      key: "role",
      label: "Role",
      render: (row) => <RoleBadge name={row.role?.name ?? "—"} />,
    },
    { key: "email", label: "Email" },
    {
      key: "school",
      label: "Assigned School",
      render: (row) => <span>{row.School?.schoolName ?? "—"}</span>,
    },
    { key: "district", label: "District" },
    {
      key: "status",
      label: "Status",
      render: (row) => <StatusBadge deletedAt={row.deletedAt} />,
    },
    {
      key: "createdAt",
      label: "Joined",
      render: (row) => <span>{formatDate(row.createdAt)}</span>,
    },
    {
      key: "actions",
      label: "Actions",
      render: (row) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setEditingUser(row);
              setModalMode("edit");
            }}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-300 text-gray-500 hover:text-gray-700"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleDelete(row)}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-red-200 text-red-500 hover:bg-red-50"
          >
            <Trash className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-4 sm:p-6 w-full min-w-0">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">User Profiles</h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Manage school administrators and their access permissions
          </p>
        </div>
        <button
          onClick={() => {
            setModalMode("create");
            setEditingUser(null);
          }}
          className="bg-[#F09C00] cursor-pointer text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add School Manager
        </button>
      </div>

      <div className="p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search admins, emails, or schools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option>All Roles</option>
            {roleOptions.map((r) => (
              <option key={r} value={r}>
                {formatRoleName(r)}
              </option>
            ))}
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option>All Statuses</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>

      <Table
        columns={columns}
        data={filteredUsers}
        itemsPerPage={6}
        isLoading={isLoading || isFetching}
      />

      {modalMode && (
        <UserFormModal
          mode={modalMode}
          initial={
            modalMode === "edit" && editingUser
              ? {
                  firstName: editingUser.firstName,
                  lastName: editingUser.lastName,
                  email: editingUser.email,
                  password: "",
                  gender: editingUser.gender ?? "",
                  province: editingUser.province ?? "",
                  district: editingUser.district ?? "",
                  schoolId: editingUser.schoolId ?? "",
                }
              : emptyForm
          }
          onClose={() => {
            setModalMode(null);
            setEditingUser(null);
          }}
          onSubmit={handleFormSubmit}
          isSubmitting={isUpdating || isCreating}
        />
      )}
    </div>
  );
}