import React from "react";
import UserModel from "../../infra/http/httpClient/model/User.model";

export const UserContext = React.createContext<UserModel | null>(null);