import { Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

const SelectField = ({ selectBy, lebel, option }: any) => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const location = useLocation();
    const navigate = useNavigate();
    const [t] = useTranslation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        setSearchQuery(searchParams.get(selectBy) || '');
    }, [location.search, selectBy,setSearchQuery]);


    const handleSelectChange = (value: any) => {
        if (value) {
            console.log(`${location.pathname}?${selectBy}=${value}`);
            navigate(`${location.pathname}?${selectBy}=${value}`);
        }
    }
    const handleonClear = () => {
            navigate(`${location.pathname}`);
        
    }

    return (
        <div className='SelectField'>
            <Select
                placeholder={t(`${lebel}`)}
                options={option}
                size="large"
                className={`w-100 custoumSelectField `}
                allowClear
                onClear={handleonClear}
                onChange={handleSelectChange}
                value={searchQuery}
                
            />
        </div>
    );
};

export default React.memo(SelectField);
