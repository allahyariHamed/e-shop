'use client'
import { useDispatch } from "react-redux";
import ImageSlider from "../components/ImageList";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { removeActiveUser, setActiveUser } from "../utils/redux/authSlice";

const Home = () => {
  const [extractedUserName, SetExtractedUserName] = useState<string>()
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user?.displayName == null || '') {
          SetExtractedUserName(user?.email?.split('@')[0])
        }
        dispatch(setActiveUser({
          email: user?.email || '',
          userName: user?.displayName || extractedUserName,
          userId: user?.uid
        }))
      } else {
        dispatch(removeActiveUser())
      }
    })
  }, [dispatch, extractedUserName])

  return (
    <div>
      <ImageSlider />
    </div>
  );
}

export default Home