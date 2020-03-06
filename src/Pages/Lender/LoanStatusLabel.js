import React from 'react';
import { Label } from 'semantic-ui-react';
export const LoanStatusLabel = ({ available }) => (
  <Label horizontal circular size='mini' style={{ marginLeft: "6px" }}color={available ? 'yellow' : 'grey'}>
    {available ? 'Available' : 'On Loan'}
  </Label>
);
