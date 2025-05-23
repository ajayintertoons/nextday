import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import SearchInput from "../components/input-field/SearchInput";
import { CiSearch } from "react-icons/ci";
import toast from 'react-hot-toast';
import TrackingCard from "../components/card/TrackingCard";
import { localCheckoutSteps } from "../utils/hardcodeddata/HardcodedData";
import { Button, TablePagination } from "@mui/material";
import request from '../utils/request';
import FadeLoader from "react-spinners/FadeLoader";
import Breadcrub from "../components/button/Breadcrub";
import { myContext } from "../utils/context_api/context";
import { IoMdClose } from "react-icons/io";

const MyBookings = () => {
  //hooks
  const [selected, setSelected] = useState(0);
  const [filter, setFilter] = useState("all")
  const [cardClicked, setCardClicked] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [offset, setOffset] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(2);
  const [totalCount, setTotalCount] = useState(0);
  const [bookingList, setBookingList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearch, setIsSearch] = useState(false)

  const fetchBookingDetails = () => {
    setIsLoading(true)
    request({
      url: `V1/customer/bookings?&pageNumber=${offset + 1}&pageSize=${rowsPerPage}&status=${filter}`,
      method: "GET"
    }).then((response) => {
      setBookingList(response?.data)
      setTotalCount((response?.data[0].total))
      setIsLoading(false)
    }).catch((err) => {
      setIsLoading(false)
      if (err.response.status == 500) {
        toast.dismiss();
        toast.error(err.response.data.message)
      }
    })
  }

  useEffect(() => {
    fetchBookingDetails();
  }, [rowsPerPage, offset, filter])

  // Handler function for selection(All,Requested......)
  const handleClick = (index) => {
    setSelected(index);
    setFilter(index === 0 ? "all" : index === 1 ? "pickuprequest" : index === 2 ? "intransit" : index === 3 ? "completed" : '')
    setOffset(0)
  };

  // pagination functions
  const handleChangePage = (event, newPage) => {
    setOffset(newPage);
    setTotalCount((response?.data[0].total))
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+parseInt(event.target.value));
    setOffset(0);
  };


  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // handle search
  const handleSearchSubmit = () => {
    if (searchQuery.trim() !== "") {
      // setIsSearch(true)
    } else {
      setIsSearch(false)
      fetchBookingDetails();
    }
    // setIsLoading(true)
    request({
      url: `/V1/customer/search/bookings?searchQuery=${searchQuery}`,
      method: "GET"
    }).then((response) => {
      setBookingList(response?.data);
      setTotalCount((response?.data[0].total))
      setIsLoading(false)
    }).catch((error) => {
      setIsLoading(false)
      if (error.response?.status == 500) {
        toast.dismiss();
        toast.error(error.response.data.message)
      }
    })
  };


  const handleCardClick = (data) => {
    const status = data?.Source?.toLowerCase();
    // console.log(status, "handle card")
    if (status === "pickuprequest") {
      navigate(`/create-pickup-request?id=${data?.pickupReqId}`);
    } else {
      setCardClicked(true);
      navigate(`/home/customer/details/${data?.bookingId}`);
    }
  };


  // Set the cardClicked state to false based on the path
  useEffect(() => {
    if (location.pathname === "/home/my-bookings") {
      setCardClicked(false);
    }
  }, [location.pathname]);

  return (
    <div>
      <div className="relative">
        <Breadcrub pageTitle="My Pickups" />
      </div>
      {!cardClicked ? (
        <>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-2  items-center  ">
              {!isSearch && <div className="grid grid-cols-4 border rounded-md bold-sansation text-sm    ">
                {["All", "Requested", "Ongoing", "Completed"].map(
                  (label, index) => (
                    <div className=" flex justify-center items-center " key={index}>
                      <div
                        onClick={() => handleClick(index)}
                        className={`flex cursor-pointer justify-center  items-center rounded-md p-2 m-2  w-full 
            ${selected === index
                            ? "bg-custom-green text-white"
                            : `bg-${label.toLowerCase()}-300`
                          }`}
                      >
                        {label}
                      </div>
                    </div>
                  )
                )}
              </div>}
              <div className="flex justify-center items-center h-auto mx-3 mb-3 ">
                <div className='relative mb-2 mt-3 md:w-3/4'>
                  <SearchInput
                    placeholder="Search "
                    onChange={handleSearch} Icon={CiSearch} value={searchQuery}
                    className=" w-full py-1 mt-0 sm:w-full md:w-full"
                  />
                  {searchQuery && (
                    <IoMdClose
                    className='absolute top-1/2 right-8 transform -translate-y-1/2 text-lg cursor-pointer'
                    onClick={() => handleSearch({ target: { value: '' } })}
                    title="Clear"
                    />
                  )}
                </div>
                <button onClick={handleSearchSubmit} type="submit" className="bg-custom-green flex items-center  justify-center rounded-md text-white font-sansation font-regular mt-1 py-2 ms-2 px-3">Search</button>
              </div>
            </div>

            <div style={{ minHeight: "350px" }} >
              {!isLoading && <div className="grid grid-cols-1" >
                {bookingList?.map((stepData, index) => {
                  const status = stepData?.bookingStatus || "";
                  return (
                    <TrackingCard
                      key={index}
                      status={status}
                      data={stepData}
                      onClick={() => handleCardClick(stepData)}
                    />
                  );
                })}
              </div>}
              {isLoading && <div style={{ height: "350px" }} className="flex items-center justify-center"><FadeLoader
                color={"green"}
                loading={isLoading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              /></div>}
              {((!bookingList && !isLoading) || (bookingList?.length === 0 && !isLoading)) && <div style={{ height: "350px" }} className="flex items-center justify-center"><span>No Booking Found</span></div>}
            </div>
          </div>
          {!isSearch && <TablePagination
            rowsPerPageOptions={[2, 4, 6, 8, 10]}
            component="div"
            count={totalCount}
            rowsPerPage={rowsPerPage}
            page={offset}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />}
        </>
      ) : (
        <>
          <Outlet />
        </>
      )}
    </div>
  );
};

export default MyBookings;
