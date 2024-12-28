import React from "react";
import { Card, Row, Col, Tag } from "antd";

// Mock job data
const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    description: "We are looking for a skilled Frontend Developer to join our team.",
    datePosted: "2 days ago",
    employmentType: "Full-time",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "DevWorks",
    location: "Remote",
    description: "Join our backend team and help scale our applications.",
    datePosted: "5 days ago",
    employmentType: "Contract",
  },
  {
    id: 3,
    title: "Product Manager",
    company: "InnovateX",
    location: "New York, NY",
    description: "Lead product initiatives and collaborate with cross-functional teams.",
    datePosted: "1 week ago",
    employmentType: "Full-time",
  },
  // Add more job listings as needed
];

const JobListing: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-10">
      <h2>Job Listings</h2>
      <Row gutter={[16, 16]}>
        {jobs.map((job) => (
          <Col xs={24} key={job.id}>
            <Card
              hoverable
              title={job.title}
              bordered={false}
              extra={<Tag color="blue">{job.employmentType}</Tag>}
              style={{ marginBottom: "20px" }}
            >
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p>{job.description}</p>
              <p><small>{job.datePosted}</small></p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default JobListing;
