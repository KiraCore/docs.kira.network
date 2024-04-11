import React from 'react';
import SearchBar from '@theme-original/SearchBar';
import AskCookbook from '@cookbookdev/docsbot/react';

export default function SearchBarWrapper(props) {
  return (
    <>
      <SearchBar {...props} />
      <AskCookbook
        apiKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWVmNmUzMGIyMjE3MGZkZGNlNmZmMDciLCJpYXQiOjE3MTAxOTAxMjgsImV4cCI6MjAyNTc2NjEyOH0.8nv0LsYIESu0kFUabpQ-dGUGpJIHKjd8x_FjZy5LCB4"
      />
    </>
  );
}
