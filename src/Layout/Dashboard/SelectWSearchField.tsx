import { Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

const SelectWSearchField = ({ selectBy, submiteBy, lebel, option }: any) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const location = useLocation();
  const navigate = useNavigate();
  const [t] = useTranslation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setSearchQuery(searchParams.get('search') || '');
  }, []);

  const handleSearchChange = (value: any) => {
    if (value || value !== "") {
      navigate(`${location.pathname}?${selectBy}=${value}`);
    } else {
      const params = new URLSearchParams(location.search);
      params.delete(selectBy ?? "search");
      navigate(`${location.pathname}?${params.toString()}`);
    }
  };

  const handleSelectChange = (value: any) => {
    if (value) {
        console.log(`${location.pathname}?${submiteBy}=${value}`);
        
      navigate(`${location.pathname}?${submiteBy}=${value}`);
    } 
}

  return (
    <div className='SelectWSearchField'>
      <Select
        placeholder={t(`${lebel}`)}
        options={option}
        size="large"
        className={`w-100`}
        allowClear
        onChange={handleSelectChange}
        showSearch
        optionFilterProp="label"
        onSearch={handleSearchChange}
      />
    </div>
  );
};

export default React.memo(SelectWSearchField);
