import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {Container} from "react-bootstrap";
import CertificateList from "./CertificateList";
import CertificateFilter from "./CertifiateFilter";

const Certificate = () => {
    const {certificates} = useSelector(state => state.certificate)
    const [currentFilter, setCurrentFilter] = useState('all');
    const changeFilter = (newFilter) => {
        setCurrentFilter(newFilter);
    }

    const filterCertifcates = certificates.filter(certificate => {
        if (currentFilter === 'all') {
            return certificates;
        } else {
            return certificate.category === currentFilter
        }
    })


    return (


        <Container fluid className={'project-section'}>
            <CertificateFilter currentFilter={currentFilter} changedFilter={changeFilter}/>
            <CertificateList  title={currentFilter}  certificates={filterCertifcates}/>
        </Container>

    );
};

export default Certificate;
