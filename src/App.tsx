import React, { useEffect, useState } from "react";
import Heading from "components/Heading";
import { AppContainer, AppWrapper } from "StyledApp";
import DataTable from "components/DataTable";
import { IEmployee } from "models/interfaces";
import api from "utils/api";

function App() {
  const [employees, setEmployees] = useState<IEmployee[]>([]);

  useEffect(() => {
    api.getEmployees().then((rs) => setEmployees(rs));
  }, []);

  return (
    <AppWrapper>
      <AppContainer>
        <Heading title="Employees" />
        <DataTable labels={["name", "email", "position"]} data={employees} />
      </AppContainer>
    </AppWrapper>
  );
}

export default App;
