import { Button } from "@mui/material";
import { Link } from "react-router-dom";
export default function NotFound() { return <div className="not-found"><span>404</span><h1>Page not found</h1><Button component={Link} to="/" variant="contained">Back to home</Button></div>; }