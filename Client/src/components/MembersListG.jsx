import React from 'react';

const members = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Eve Robert' },
//   { id: 3, name: 'Emma will' },
//   { id: 4, name: 'Cruze wode' },
//   { id: 5, name: 'Justin Hailer' },
//   { id: 6, name: 'Rose Mary' },
];

function MembersListG() {
  return (
    <div class="memberListG">
      <h1>Members List</h1>
      <ul>
        {members.map(member => (
          <li key={member.id}>{member.name} (Property ID{ member.id})</li>
        ))}
      </ul>
    </div>
  );
}

export default MembersListG;