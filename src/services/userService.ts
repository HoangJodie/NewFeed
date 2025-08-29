import apiClient from "../lib/apiClient";

const userService = {
    getDefaultUser: () => apiClient.get("/users/1"),
    getUsers: () => apiClient.get("/users"),
    getUserById: (id: number) => apiClient.get(`/users/${id}`),
    createUser: (userData: any) => apiClient.post("/users", userData),
    updateUser: (id: number, userData: any) => apiClient.put(`/users/${id}`, userData),
    deleteUser: (id: number) => apiClient.delete(`/users/${id}`),
};

export default userService;