import React from 'react';
import { Components } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';

const AdminUsers = () => (
  <div className="admin-users">
    <Components.Datatable
      collection={Users}
      columns={[
        {
          name: 'createdAt',
          sortable: true,
        },
        {
          name: 'displayName',
          sortable: true,
        },
        {
          name: 'email',
          sortable: true,
        },
        {
          name: 'groups',
          filterable: true,
        },
      ]}
    />
  </div>
);

export default AdminUsers;
