import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function TeamInfoComp({teamMemberList}) {

  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      <h1>Team</h1>      
        {teamMemberList.map((member) => {
          return(
            <Accordion expanded={expanded === member.EmployeeID} onChange={handleChange(member.EmployeeID)} >
              <AccordionSummary 
              expandIcon={<ExpandMoreIcon />}
               aria-controls="panel1d-content"
                id="panel1d-header">              
              <Typography>{member.FirstName + " " + member.LastName}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  <table>
                      <tr>
                        <td>Name</td>
                        <td>{member.FirstName +" " + member.LastName}</td>
                      </tr>
                      <tr>
                        <td>Project Code</td>
                        <td>{member.ProjectCode}</td>
                      </tr>
                      <tr>
                        <td>Email Address</td>
                        <td>{member.Email}</td>
                      </tr>
                      <tr>
                        <td>Contact Number</td>
                        <td>{member.ContactNumber}</td>
                      </tr>
                      <tr>
                        <td>Address</td>
                        <td>{member.City + " " + member.State + " " + member.Country}</td>
                      </tr>
                      <tr>
                        <td>Employment Type</td>
                        <td>{member.EmploymentType}</td>
                      </tr>
                    </table>
                  </Typography>
                </AccordionDetails>
              </Accordion>
             )})}      
      </div>
  );
}
