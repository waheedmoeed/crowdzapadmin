import { setListedProps, fetchListedPropsFailed, loadingListedProps } from "Redux/ListedProps";
import {ListedPropService} from "./ListedPropService"


let listedPropService = new ListedPropService()
export const getListedProps = (nodeName) => (dispatch) => {
    dispatch(loadingListedProps(true))
    listedPropService.getListedProps({nodeName: nodeName}).then(res => {
        if (res.status === 200) {
            let payload = {
                listedProps: res.data.data,
                filterBy: nodeName
            }
            dispatch(setListedProps(payload))
        } else {
            dispatch(fetchListedPropsFailed())
        }
    })
        .catch(err => {
            dispatch(fetchListedPropsFailed())
            console.log(err)
        });
};


export const getQueryListedProps = (cityName, cb) => (dispatch) => {
    dispatch(loadingListedProps(true))
    listedPropService.getListedProps({
            key:"city",
            value: cityName
    })
    .then(res => {
        dispatch(loadingListedProps(false))
        if (res.status === 200) {
            cb(res.data.data)
        }
    }).catch(err => {
        dispatch(loadingListedProps(false))
    });
};

export{}
