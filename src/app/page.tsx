"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch } from "@/redux/store";
import { getAboutSelector } from "@/redux/reducers/about/selectors";
import { fetchAboutRequest } from "@/redux/reducers/about/actions";


export default function Home() {
  const data = 'christy'
  // const dispatch = useDispatch<AppDisp>();
  const dispatch = useDispatch();
  const categoryStore: any = useSelector(getAboutSelector);
  console.log(categoryStore,'responceeeeeeeeeeeeeeeeeeeeee')
  useEffect(()=> {
    dispatch(fetchAboutRequest(data));
  },[])
  return (
    <main>
      <div>HI christy</div>
    </main>
  );
}
