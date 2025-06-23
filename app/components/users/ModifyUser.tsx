"use client";

import React, { useState } from "react";
import type { User } from "@/app/types/user";
import {
	Box,
	Typography,
	Switch,
	FormControlLabel,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Checkbox,
	ListItemText,
	Button,
} from "@mui/material";
import { clientFetch } from "../../utils/fetch_client";

interface UserEditFormProps {
	initialUser: User;
}

export default function ModifyUser({ initialUser }: UserEditFormProps) {
	// form state is only populated once you enable editing
	const [form, setForm] = useState({
		email: "",
		bio: "",
		avatarURL: "",
		roles: initialUser.roles ?? ([] as string[]),
	});

	// which fields are editable?
	const [editMode, setEditMode] = useState({
		email: false,
		bio: false,
		avatarURL: false,
		roles: false,
	});

	const [error, setError] = useState("");
	const [saving, setSaving] = useState(false);

	function toggleField(field: keyof typeof form) {
		setEditMode((prev) => {
			const nowOn = !prev[field];
			// seed only if turning on AND value is still empty
			if (nowOn && form[field] === "") {
				setForm((f) => ({
					...f,
					[field]: (initialUser as any)[field] ?? "",
				}));
			}
			return { ...prev, [field]: nowOn };
		});
	}

	function handleSettingChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		const { name, value } = e.target;
		setForm((f) => ({ ...f, [name]: value }));
	}

	function handleRoleChange(newRoles: string[]) {
		setForm((f) => ({ ...f, roles: newRoles }));
	}

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setSaving(true);
		setError("");
		try {
			await clientFetch<User>("users", initialUser._id, "PUT", form);
			setEditMode({
				email: false,
				bio: false,
				avatarURL: false,
				roles: false,
			});
		} catch (err: any) {
			setError(err.message);
		} finally {
			setSaving(false);
		}
	}
	return (
		<Box
			component="form"
			onSubmit={handleSubmit}
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: 3,
				p: 3,
				maxWidth: 600,
				mx: "auto",
				color: "text.secondary",
			}}
		>
			<Typography variant="h5" component="h2" gutterBottom>
				{initialUser.username}
			</Typography>

			{error && (
				<Typography color="error" variant="body2">
					{error}
				</Typography>
			)}

			{/* Email */}
			<FormControlLabel
				control={
					<Switch
						checked={editMode.email}
						onChange={() => toggleField("email")}
						color="primary"
					/>
				}
				label="Edit Email"
			/>
			<TextField
				name="email"
				label="Email"
				value={form.email}
				onChange={handleSettingChange}
				// disabled={!editMode.email}
				slotProps={{
					input: {
						readOnly: !editMode.email,
					},
				}}
				color="secondary"
				fullWidth
			/>

			{/* Bio */}
			<FormControlLabel
				control={
					<Switch
						checked={editMode.bio}
						onChange={() => toggleField("bio")}
						color="primary"
					/>
				}
				label="Edit Bio"
			/>
			<TextField
				name="bio"
				label="Bio"
				value={form.bio}
				onChange={handleSettingChange}
				disabled={!editMode.bio}
				fullWidth
				multiline
				rows={4}
			/>

			{/* Avatar URL */}
			<FormControlLabel
				control={
					<Switch
						checked={editMode.avatarURL}
						onChange={() => toggleField("avatarURL")}
						color="primary"
					/>
				}
				label="Edit Avatar URL"
			/>
			<TextField
				name="avatarURL"
				label="Avatar URL"
				value={form.avatarURL}
				onChange={handleSettingChange}
				disabled={!editMode.avatarURL}
				fullWidth
			/>

			{/* Roles */}
			<FormControlLabel
				control={
					<Switch
						checked={editMode.roles}
						onChange={() => toggleField("roles")}
						color="primary"
					/>
				}
				label="Edit Roles"
			/>
			<FormControl fullWidth disabled={!editMode.roles}>
				<InputLabel id="roles-label">Roles</InputLabel>
				<Select
					labelId="roles-label"
					multiple
					value={form.roles}
					onChange={(e) =>
						handleRoleChange(
							typeof e.target.value === "string"
								? e.target.value.split(",")
								: (e.target.value as string[])
						)
					}
					renderValue={(selected) =>
						(selected as string[]).join(", ")
					}
					label="Roles"
				>
					{["user", "admin", "dev"].map((role) => (
						<MenuItem key={role} value={role}>
							<Checkbox checked={form.roles.includes(role)} />
							<ListItemText primary={role} />
						</MenuItem>
					))}
				</Select>
			</FormControl>

			{/* Save Button */}
			<Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					disabled={saving}
				>
					{saving ? "Saving..." : "Save Changes"}
				</Button>
			</Box>
		</Box>
	);
}
