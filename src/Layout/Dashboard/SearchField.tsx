import { Input } from 'antd';
import { SearchProps } from 'antd/es/input'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
const { Search } = Input;

const SearchField = ({ searchBy }: any) => {
    const navigate = useNavigate()
    const [searchParams,] = useSearchParams();
    const location = useLocation()
    const { t } = useTranslation();


    const [searchValue, setSearchValue] = useState(searchParams.get(searchBy ?? "search") || "");

    const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
        if (value || value !== "") {
            navigate(`${location?.pathname}?${searchBy ?? "search"}=${value}`);
        } else {
            const params = new URLSearchParams(location.search);
            params.delete(searchBy ?? "search");
            navigate(`${location.pathname}?${params.toString()}`);
        }
    }

    const onChange = (e: any) => {
        const value = e.target.value
        setSearchValue(e.target.value);
        if (value === "") {
            const params = new URLSearchParams(location.search);
            params.delete(searchBy ?? "search");
            navigate(`${location.pathname}?${params.toString()}`);
        }
    }


    return (
        <div className='SearchField'
        >
            <Search
                allowClear
                enterButton={t("search")}
                size="middle"
                placeholder={t(searchBy ?? "search")}
                onSearch={onSearch}
                style={{ width: 250 }}
                value={searchValue}
                onChange={onChange}
            />

        </div>
    )
}

export default SearchField