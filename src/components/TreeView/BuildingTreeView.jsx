import * as React from 'react';
import { styled } from '@mui/material/styles';
import FolderRounded from '@mui/icons-material/FolderRounded';
import MailIcon from '@mui/icons-material/Mail';
import { unstable_useTreeItem2 as useTreeItem2 } from '@mui/x-tree-view/useTreeItem2';
import {
  TreeItem2Checkbox,
  TreeItem2Content,
  TreeItem2IconContainer,
  TreeItem2Label,
  TreeItem2Root,
} from '@mui/x-tree-view/TreeItem2';
import { TreeItem2Provider } from '@mui/x-tree-view/TreeItem2Provider';
import Collapse from '@mui/material/Collapse';
import { animated, useSpring } from '@react-spring/web';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';

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
          children: [],
        },
        {
          id: '65cf318f52c2c25b64f56920',
          title: 'حل مسائل',
          children: [
            {
              id: '65cf31b652c2c25b64f56924',
              title: 'مسئله شماره یک و دو',
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: '65cf315252c2c25b64f56914',
      title: 'به سوی ظهور',
      children: [
        {
          id: '65cf31df52c2c25b64f56928',
          title: 'آخرالزمان',
          children: [],
        },
      ],
    },
    {
      id: '65cf320f52c2c25b64f5692c',
      title: 'بدون زیر پروژه',
      children: [],
    },
  ],
};

const StyledTreeItemRoot = styled(TreeItem2Root)(({ theme }) => ({
  position: 'relative',
}));

const CustomTreeItemContent = styled(TreeItem2Content)(({ theme }) => ({
  flexDirection: 'row-reverse',
  borderRadius: '12px',
  marginBottom: theme.spacing(0.5),
  marginTop: theme.spacing(0.5),
  padding: theme.spacing(0.5),
  paddingRight: theme.spacing(1),
  fontWeight: 500,
  '&:hover': {
    backgroundColor: '#FEEFEA',
  },
  [`&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused`]: {
    backgroundColor: '#FEEFEA',
    color: 'black',
  },
}));

const AnimatedCollapse = animated(Collapse);

function TransitionComponent(props) {
  const style = useSpring({
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(0,${props.in ? 0 : 20}px,0)`,
    },
  });

  return <AnimatedCollapse style={style} {...props} />;
}

function CustomLabel({ icon: Icon, children, ...other }) {
  return (
    <TreeItem2Label
      {...other}
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {Icon && (
        <Icon
          style={{ marginRight: '8px', fontSize: '1.2rem' }}
        />
      )}
      {children}
    </TreeItem2Label>
  );
}

const CustomTreeItem = React.forwardRef(function CustomTreeItem(props, ref) {
  const { id, itemId, label, icon, children, ...other } = props;

  const {
    getRootProps,
    getContentProps,
    getIconContainerProps,
    getCheckboxProps,
    getLabelProps,
    getGroupTransitionProps,
    status,
  } = useTreeItem2({ id, itemId, children, label, rootRef: ref });

  const expandable = children && children.length > 0;

  return (
    <TreeItem2Provider itemId={itemId}>
      <StyledTreeItemRoot {...getRootProps(other)}>
        <CustomTreeItemContent
          {...getContentProps({
            className: `content ${status.expanded ? 'Mui-expanded' : ''}`,
          })}
        >
          <TreeItem2IconContainer {...getIconContainerProps()}>
            {/* Insert custom icons if necessary */}
          </TreeItem2IconContainer>
          <TreeItem2Checkbox {...getCheckboxProps()} />
          <CustomLabel
            {...getLabelProps({ icon: icon || (expandable ? FolderRounded : MailIcon) })}
          >
            {label}
          </CustomLabel>
        </CustomTreeItemContent>
        {children && <TransitionComponent {...getGroupTransitionProps()}>{children}</TransitionComponent>}
      </StyledTreeItemRoot>
    </TreeItem2Provider>
  );
});

const renderTreeItems = (node) => {
  return (
    <CustomTreeItem
      key={node.id}
      itemId={node.id}
      label={node.title}
      icon={node.icon} // Set custom icons if needed
    >
      {node.children && node.children.length > 0 && (
        <>
          {node.children.map((child) => renderTreeItems(child))}
        </>
      )}
    </CustomTreeItem>
  );
};

const BuildingTreeView = () => {
  return (
    <RichTreeView
      items={data.children}
      defaultExpandedItems={['65cf312d52c2c25b64f56910']}
      defaultSelectedItems="65cf317a52c2c25b64f5691c"
      sx={{ height: 'fit-content', flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
      slots={{ item: CustomTreeItem }}
      getItemLabel={(item) => item.title}
    />

  );
};

export default BuildingTreeView;
