import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import FusePageSimple from '@fuse/core/FusePageSimple';
import DemoContent from '@fuse/core/DemoContent';
import { useState, useEffect } from 'react';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
  },
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
}));

function ExamplePage(props) {
  const { t } = useTranslation('examplePage');

  // const [data, setData] = useState({
  //   name: "",
  //   price: "",
  // })

  // const changehandler = (e) => {
  //   setData({
  //     ...data,
  //     [e.target.name]: e.target.value,
  //   })
  // }
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   fetch('http://192.168.1.59:5000/api/add_product', {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'content-type': 'application/json'
  //     }
  //   })
  // }
  return (
    <>
      {/* <form action="" onSubmit={submitHandler}>

        <label htmlFor="text">Name</label>

        <input type="text" style={{ bakgroundColor: "red" }} onChange={changehandler} defaultValue={data.name} name="name" />

        <label htmlFor="text">price</label>
        <input type="number" onChange={changehandler} defaultValue={data.price} name="price" />

        <button type="submit">submit</button>
      </form> */}
      {/* <div>
        <iframe src="http://192.168.1.59:5000/api/show" width="1100" height="500" frameborder="0">
        </iframe>
      </div> */}

      <Root

        header={
          <div className="p-24">
            <h4>{t('TITLE')}</h4>
          </div>
        }
        content={

          <div className="p-24">
            <h4>Content</h4>
            <br />
            <DemoContent />
          </div>
        }
        scroll="content"
      />

    </>
  );
}

export default ExamplePage;