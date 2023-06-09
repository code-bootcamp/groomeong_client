import { IAutocompleteShopsOutput } from "./../../../../commons/types/generated/types";
import { IMapState, mapState } from "./../../../../commons/Store/index";
import { useRecoilState } from "recoil";
import getLatLng from "../../../../commons/Utils/getLatLng";
import { useEffect, useRef } from "react";
import { Marker } from "@react-google-maps/api";

export const useMaker = (shop?: IAutocompleteShopsOutput) => {
  const [mapInfo, setMapInfo] = useRecoilState(mapState);
  const markerRef = useRef<Marker>(null);

  const onClickMaker = (e: google.maps.MapMouseEvent) => {
    e.domEvent.stopPropagation();
    e.domEvent.stopImmediatePropagation();
    setMapInfo((prev: IMapState) => ({
      ...prev,
      marker: markerRef,
      shop,
    }));
    if (shop != null) {
      const pos = getLatLng(shop.lat, shop.lng);
      mapInfo?.map?.setZoom(17);
      if (pos !== null) {
        mapInfo?.map?.panTo(pos);
      }
    }
  };

  useEffect(() => {
    if (shop != null) {
      if (shop?.id === mapInfo?.shop?.id) {
        const pos = getLatLng(shop?.lat, shop?.lng);
        mapInfo?.map?.setZoom(15);
        mapInfo?.map?.panTo(pos);
  
      }
   }
  }, [onClickMaker]);

  return {
    onClickMaker,
    markerRef,
  };
};
