import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-componentsBack';

import DashboardDefaultSection1 from '../../componentsBack/DashboardDefault/DashboardDefaultSection1';
import DashboardDefaultSection2 from '../../componentsBack/DashboardDefault/DashboardDefaultSection2';
import DashboardDefaultSection3 from '../../componentsBack/DashboardDefault/DashboardDefaultSection3';
import DashboardDefaultSection4 from '../../componentsBack/DashboardDefault/DashboardDefaultSection4';
export default function DashboardDefault() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Wamya Dashboard"
        titleDescription="This is a dashboard page example built using this template."
      />

      <DashboardDefaultSection1 />
      <DashboardDefaultSection2 />
      <DashboardDefaultSection3 />
      <DashboardDefaultSection4 />
    </Fragment>
  );
}
