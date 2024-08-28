import userData from './userData.json';

export const getUsers = (page = 1, limit = 20, filters = {}, search = '') => {
  let filteredUsers = userData;

  // Apply filters
  if (filters.domain) {
    filteredUsers = filteredUsers.filter(user => user.domain === filters.domain);
  }
  if (filters.gender) {
    filteredUsers = filteredUsers.filter(user => user.gender === filters.gender);
  }
  if (filters.available !== undefined) {
    filteredUsers = filteredUsers.filter(user => user.available === filters.available);
  }

  // Apply search
  if (search) {
    filteredUsers = filteredUsers.filter(user => 
      user.first_name.toLowerCase().includes(search.toLowerCase()) ||
      user.last_name.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Apply pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

  return {
    users: paginatedUsers,
    currentPage: page,
    totalPages: Math.ceil(filteredUsers.length / limit)
  };
};