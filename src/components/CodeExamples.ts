
// Centralized file for code examples used in slides

export const componentCodeExample = `
// Modern React component with TypeScript
import React from 'react';
import { useQuery } from '@tanstack/react-query';

interface User {
  id: number;
  name: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('/api/users');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const UserList: React.FC = () => {
  const { 
    data: users, 
    isLoading, 
    error 
  } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users</div>;

  return (
    <ul className="space-y-4">
      {users?.map(user => (
        <li key={user.id} className="p-4 border rounded-md">
          <h3 className="font-medium">{user.name}</h3>
          <p className="text-gray-500">{user.email}</p>
        </li>
      ))}
    </ul>
  );
};
`;

export const accessibilityExample = `
// Accessible React component
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', isLoading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={\`rounded-md px-4 py-2 font-medium \${
          variant === 'primary' 
            ? 'bg-blue-500 text-white' 
            : 'bg-gray-100 text-gray-800'
        }\`}
        disabled={isLoading || props.disabled}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4" viewBox="0 0 24 24">
              <circle 
                className="opacity-25" 
                cx="12" cy="12" r="10" 
                stroke="currentColor" 
                strokeWidth="4" 
                fill="none" 
              />
              <path 
                className="opacity-75" 
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" 
              />
            </svg>
            Loading...
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
`;

export const performanceOptimizationCode = `
// Performance optimized component
import React, { useState, useMemo, useCallback } from 'react';

interface Item {
  id: number;
  name: string;
  category: string;
}

interface ItemListProps {
  items: Item[];
  searchTerm: string;
}

export const ItemList: React.FC<ItemListProps> = ({ items, searchTerm }) => {
  // Memoize filtered items to prevent unnecessary recalculations
  const filteredItems = useMemo(() => {
    console.log('Filtering items...'); // This won't run on every render
    return items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  // Memoize event handlers
  const handleItemClick = useCallback((id: number) => {
    console.log(\`Item \${id} clicked\`);
  }, []);

  return (
    <ul className="space-y-2">
      {filteredItems.map(item => (
        <li 
          key={item.id}
          onClick={() => handleItemClick(item.id)}
          className="p-3 border rounded cursor-pointer hover:bg-gray-50"
        >
          {item.name} ({item.category})
        </li>
      ))}
      {filteredItems.length === 0 && (
        <li className="text-gray-500">No items found</li>
      )}
    </ul>
  );
};

// Use React.memo to prevent unnecessary re-renders
export default React.memo(ItemList);
`;
