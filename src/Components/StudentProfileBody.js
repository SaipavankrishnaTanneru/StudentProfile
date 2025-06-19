import React, { useState } from 'react';
import { Container, Row, Col, Dropdown, FormCheck, Form, Button } from 'react-bootstrap';
import '../Components/StudentProfileBody.css'; 

const StudentProfile = () => {
  const alertText = "There are 200 students with overdue payments totaling ₹45,000. Review and send reminders.";
  const [showFilter, setShowFilter] = useState(false);

  return (
    <main>
      {/* Top Section - Student Profile */}
      <section className="student-profile-section d-flex align-items-center">
        <Container fluid>
          <Row className="w-100">
            <Col md={12}>
              <div className="text-start p-4 w-100">
                <h2 className="fw-bold mb-2">Student Profile</h2>
                <p className="text-muted w-75">
                  Access and manage comprehensive student details seamlessly. View personalized profiles tailored to your campus.
                </p>
                
                <div className="position-relative search-filter-wrapper" style={{ width: '45%' }}>
                  <div className='input-group search-input-group w-100'>
                    <span
                      className='input-group-text bg-white border-end-0'
                      style={{ cursor: 'pointer' }}
                      onClick={() => setShowFilter(!showFilter)}
                    >
                      <i className='bi bi-search text-dark'></i>
                    </span>
                    <input
                      type="text"
                      className="form-control border-start-0"
                      placeholder="Search for student profile"
                    />
                  </div>
                  {showFilter && (
                    <div className="filter-toggle-box shadow" style={{width:"100%",padding:"1rem"}}> 
                      <h6 className="fw-bold mb-3 ">Filter</h6>
                      <Form.Check className="mb-3" type="checkbox" label="Other Branch" defaultChecked />

                      <div className="mb-3 d-flex justify-content-between align-items-center">
                        <span className="fw-medium ">Location</span>
                        <span className="fs-4 fw-bold">+</span>
                      </div>

                      <div className="mb-3 d-flex justify-content-between align-items-center">
                        <span className="fw-medium">Student Details</span>
                        <span className="fs-4 fw-bold">+</span>
                      </div>

                      <hr />

                      <h6 className="fw-bold mb-3">Student Category</h6>
                      <div className="student-category-grid ">
                        <Form.Check type="checkbox" label="Current Batch" defaultChecked />
                        <Form.Check type="checkbox" label="Passed Out" />
                        <Form.Check type="checkbox" label="Long Absent" />
                        <Form.Check type="checkbox" label="All" />
                        <Form.Check type="checkbox" label="Drop Out" />
                      </div>

                      <div className="mt-4 d-flex justify-content-center">
                        <Button className="w-25 search-btn">Search</Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Bottom Section - Alerts */}
      <section className={`alerts-container border rounded mt-2 p-4 bg-white shadow-sm ${showFilter ? 'disabled' : ''}`}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold m-0">Alerts</h4>
          <Dropdown>
            <Dropdown.Toggle variant="light" className="border-0 fw-medium text-secondary">
              Last 7 days 
            </Dropdown.Toggle>
            {/* <Dropdown.Menu>
              <Dropdown.Item>Last 24 hours</Dropdown.Item>
              <Dropdown.Item>Last 7 days</Dropdown.Item>
              <Dropdown.Item>Last 30 days</Dropdown.Item>
            </Dropdown.Menu> */}
          </Dropdown>
        </div>

        <Row className="gy-3">
          {[1, 2, 3].map((item, index) => (
            <Col key={index} md={4} className={`border-end ${index === 2 ? 'border-end-0' : ''}`}>
              <div className="d-flex align-items-start gap-2 pe-3">
                <i className="bi bi-exclamation-triangle-fill text-danger fs-5 mt-1"></i>
                <div>
                  <h6 className="fw-bold mb-1">Pending Student Payments</h6>
                  <p className="mb-0 text-muted">
                    {alertText}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </section>
    </main>
  );
};

export default StudentProfile;