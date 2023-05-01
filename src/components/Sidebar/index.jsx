import { useRef, useState } from "react";
import Link from 'next/link'
import useStore from "@/data/store";

import style from "./sidebar.module.scss";

const Sidebar = () => {
  const componentRef = useRef(null)
  const { sidebar, setSidebar } = useStore()

  const sidebarCloseHandler = (e) => {
    if (sidebar.open && componentRef.current && !componentRef.current.contains(e.target)) {
      setSidebar(false)
    }
  };


  return (
    <div
      className={`${style.sidebar} ${sidebar.open && style.sidebar__open}`}
      onClick={(e) => sidebarCloseHandler(e)}
    >
      <div className={style.sidebar__inner} ref={componentRef}>
        <div className={style.sidebar__header}>
          <div className={style.sidebar__header__title}>Nikhoj</div>
          <button
            type="button"
            className={style.sidebar__header__closeBtn}
            onClick={() => setSidebar({ open: false})}
          >
            <i className="xiroicon xi-close"></i>
          </button>
        </div>
        <div className={style.sidebar__body}>
          
          <div className='form-group'>
            <p>
              <Link href="/docs">Read Our <strong>Docs</strong></Link>
            </p>
          </div>


        </div>
        <div className={style.sidebar__footer}>
          sidebar footer
          </div>
      </div>
    </div>
  );
};


export default Sidebar;
