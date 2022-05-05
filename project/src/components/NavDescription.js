import { useState } from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CNavItem,
  CNavLink,
} from "@coreui/react";

export default function NavDescription({ activeCountries }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <CNavbar expand="lg" colorScheme="light" className="bg-light fixed-top">
        <CContainer fluid>
          <CNavbarBrand>Countries:</CNavbarBrand>
          <CNavbarToggler onClick={() => setVisible(!visible)} />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav>
              {activeCountries.map((val) => (
                <CNavItem>
                  <CNavLink active>{val.Country}</CNavLink>
                </CNavItem>
              ))}
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  );
}
