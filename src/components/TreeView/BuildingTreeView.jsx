import * as React from 'react';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import MailIcon from '@mui/icons-material/Mail';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import './BuildingTreeView.css';
import { styled } from '@mui/material';

const data = {
  id: 'root',
  title: 'پروژه ها',
  icon: FolderIcon,
  children: [
    {
      id: '65cf312d52c2c25b64f56910',
      title: 'ساختمان',
      icon: FolderIcon,
      children: [
        {
          id: '65cf317a52c2c25b64f5691c',
          title: 'وب اپلیکیشن',
          icon: InsertDriveFileIcon,
          children: []
        },
        {
          id: '65cf318f52c2c25b64f56920',
          title: 'حل مسائل',
          icon: FolderIcon,
          children: [
            {
              id: '65cf31b652c2c25b64f56924',
              title: 'مسئله شماره یک و دو',
              icon: InsertDriveFileIcon,
              children: []
            }
          ]
        }
      ]
    },
    {
      id: '65cf315252c2c25b64f56914',
      title: 'به سوی ظهور',
      icon: FolderIcon,
      children: [
        {
          id: '65cf31df52c2c25b64f56928',
          title: 'آخرالزمان',
          icon: InsertDriveFileIcon,
          children: []
        }
      ]
    },
    {
      id: '65cf320f52c2c25b64f5692c',
      title: 'بدون زیر پروژه',
      icon: MailIcon,
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  const IconComponent = node.icon || MailIcon;
  return (
    <StyledTreeItem
      key={node.id}
      itemId={node.id}
      label={
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconComponent style={{ marginRight: '8px' }} />
          <span>{node.title}</span>
        </div>
      }
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
