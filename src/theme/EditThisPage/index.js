import React from 'react';
import EditThisPage from '@theme-original/EditThisPage';
import Link from '@docusaurus/Link';
import IconEdit from '@theme/Icon/Edit';
import {ThemeClassNames} from '@docusaurus/theme-common';

export default function EditThisPageWrapper(props) {
  return (
    <>
      <EditThisPage {...props} /> or&nbsp;
      <Link to='https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.yaml&title=%5BFEATURE+REQUEST%5D' className={ThemeClassNames.common.editThisPage}>
        Make a suggestion
    </Link>
    </>
  );
}
