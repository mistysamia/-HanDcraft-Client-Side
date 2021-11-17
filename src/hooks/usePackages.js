import { useState,useEffect } from 'react';

const usePackages = () => {
    const [packages, setPackages] = useState([]);
        useEffect(() => {
            fetch(`https://vast-woodland-49902.herokuapp.com/products`)
                .then(res => res.json())
                .then(data => setPackages(data));
        }, []);
        return [packages, setPackages];
};

export default usePackages;