import React from 'react'
import { getInitials } from '../../utils/helper'

const ProfileInfo = ({userInfo, onLogout}) => {
  return (
    userInfo && (
    <div className="flex items-centre gap-3">
      <div className="w-10 h-10 flex items-centre justify-centre rounded-full text-slate-950 font-medium bg-slate-100">
      {getInitials(userInfo.fullName)}
      </div>

      <div>
        <p className="text-sm font-medium">{userInfo.fullName}</p>
        <button className="text-sm text-slate-700 underline" onClick={onLogout}>
          Logout 
        </button>
      </div>
    </div>
  )
  );
};

export default ProfileInfo