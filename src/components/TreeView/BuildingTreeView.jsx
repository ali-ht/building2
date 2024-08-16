import * as React from 'react';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import MailIcon from '@mui/icons-material/Mail';
import './BuildingTreeView.css';
import { styled } from '@mui/material';

const data = {
  id: 'root',
  title: 'پروژه ها',
  children: [
    {
      id: '65cf312d52c2c25b64f56910',
      title: 'ساختمان',
      children: [
        {
          id: '65cf317a52c2c25b64f5691c',
          title: 'وب اپلیکیشن',
          children: []
        },
        {
          id: '65cf318f52c2c25b64f56920',
          title: 'حل مسائل',
          children: [
            {
              id: '65cf31b652c2c25b64f56924',
              title: 'مسئله شماره یک و دو',
              children: []
            }
          ]
        }
      ]
    },
    {
      id: '65cf315252c2c25b64f56914',
      title: 'به سوی ظهور',
      children: [
        {
          id: '65cf31df52c2c25b64f56928',
          title: 'آخرالزمان',
          children: []
        }
      ]
    },
    {
      id: '65cf320f52c2c25b64f5692c',
      title: 'بدون زیر پروژه',
      children: []
    }
  ],
};

const StyledTreeItem = styled(TreeItem)(({ theme }) => ({
  '& .MuiCollapse-root': {
    paddingLeft: '0',
    paddingRight: '12px',
  },
  '& .Mui-focused': {
    backgroundColor: '#FEEFEA !important',
    border: 'solid 0.15rem #F15F2B !important',
  },
  '& .Mui-selected': {
    backgroundColor: '#FEEFEA !important',
  },
  '& .MuiTreeItem-content': {
    backgroundColor: '#F3F3F3',
    borderRadius: '2rem !important',
    height: '3rem',
    padding: '1rem',
    margin: '0.6rem 0',
    color: 'black',
    textAlign: 'right',
    direction: 'ltr',
  },
  '& MuiTreeItem-root': {
    padding: '1rem',
  },
  '& .Mui-expanded': {
    backgroundColor: '#FEEFEA !important',
  },
  '& .TreeBox': {
    backgroundColor: 'white',
    height: 'calc(100% - 32px)',
    width: '40vh',
    borderRadius: '2rem',
    padding: '1rem',
  }
}))

const renderTreeItems = (node) => {
  return (
    <StyledTreeItem
      key={node.id}
      itemId={node.id}
      label={node.title}
      icon={MailIcon}
    >
      {node.children && node.children.length > 0 && (
        <>
          {node.children.map(child => renderTreeItems(child))}
        </>
      )}
    </StyledTreeItem>
  );
};

const BuildingTreeView = () => {
  const [selectedItemId, setSelectedItemId] = React.useState(null);
  const [parentItemId, setParentItemId] = React.useState(null);

  const handleItemClick = (itemId, parentId) => {
    setSelectedItemId(itemId);
    setParentItemId(parentId);
  };

  return (
    <div className='TreeBox'>
      <SimpleTreeView>
        {renderTreeItems(data)}
      </SimpleTreeView>
    </div>
  );
};

export default BuildingTreeView;
