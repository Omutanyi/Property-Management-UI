 function showBuildings(){
    document.getElementById("dashboardId").style.display = 'none';
    document.getElementById("buildingsId").style.display = 'block';
    document.getElementById("tenantsId").style.display = 'none';
    document.getElementById("paymentSectionId").style.display = 'none';
}
 function showTenants(){
    document.getElementById("dashboardId").style.display = 'none';
    document.getElementById("buildingsId").style.display = 'none';
    document.getElementById("tenantsId").style.display = 'block';
    document.getElementById("paymentSectionId").style.display = 'none';
}
 function showPaymentsSection(){
    document.getElementById("dashboardId").style.display = 'none';
    document.getElementById("buildingsId").style.display = 'none';
    document.getElementById("tenantsId").style.display = 'none';
    document.getElementById("paymentSectionId").style.display = 'block';
}
 function showdashboard(){
    document.getElementById("dashboardId").style.display = 'block';
    document.getElementById("buildingsId").style.display = 'none';
    document.getElementById("tenantsId").style.display = 'none';
    document.getElementById("paymentSectionId").style.display = 'none';

    document.getElementById("dashRecordsId").style.display = 'block';
    document.getElementById("paymentRecordsId").style.display = 'none';
    document.getElementById("duePayId").style.display = 'none';
    document.getElementById("latepayId").style.display = 'none';
    document.getElementById("manageuserId").style.display = 'none';

    document.getElementById("latestSectionId").style.display = 'block';
    document.getElementById("updatesSectionId").style.display = 'block';
}


function showsettingsFunction(){
    document.getElementById("settingsId").style.display = 'block';
}
function closesettingsFunction(){
    document.getElementById("settingsId").style.display = 'none';
}


function showeditProperty(){
    document.getElementById("editContentId").style.display = 'block';
}
function closeditProperty(){
    document.getElementById("editContentId").style.display = 'none';
}
function showinspectContent(){
    document.getElementById("inspectContentId").style.display = 'block';
}
function closeinspectContent(){
    document.getElementById("inspectContentId").style.display = 'none';
}


function showacLinkedId(){
    document.getElementById("acLinkedId").style.display = 'block';
    document.getElementById("vacantUnitsId").style.display = 'none';
    document.getElementById("overduerentsId").style.display = 'none';
}
function showvacantUnitsId(){
    document.getElementById("acLinkedId").style.display = 'none';
    document.getElementById("vacantUnitsId").style.display = 'block';
    document.getElementById("overduerentsId").style.display = 'none';
}
function showoverduerentsId(){
    document.getElementById("acLinkedId").style.display = 'none';
    document.getElementById("vacantUnitsId").style.display = 'none';
    document.getElementById("overduerentsId").style.display = 'block';
}


 function addpropFunction(){
    document.getElementById("addPropertyId").style.display = 'block';
}
 function closepropFunction(){
    document.getElementById("addPropertyId").style.display = 'none';
}
 function showpaymentRecordsFunction(){
    document.getElementById("dashRecordsId").style.display = 'none';
    document.getElementById("paymentRecordsId").style.display = 'block';
    document.getElementById("duePayId").style.display = 'none';
    document.getElementById("latepayId").style.display = 'none';
    document.getElementById("manageuserId").style.display = 'none';
}
 function showduepayFunction(){
    document.getElementById("dashRecordsId").style.display = 'none';
    document.getElementById("paymentRecordsId").style.display = 'none';
    document.getElementById("duePayId").style.display = 'block';
    document.getElementById("latepayId").style.display = 'none';
    document.getElementById("manageuserId").style.display = 'none';
}
function showlatepayIdFunction(){
    document.getElementById("dashRecordsId").style.display = 'none';
    document.getElementById("paymentRecordsId").style.display = 'none';
    document.getElementById("duePayId").style.display = 'none';
    document.getElementById("latepayId").style.display = 'block';
    document.getElementById("manageuserId").style.display = 'none';
}
function showmanageuserIdFunction(){
    document.getElementById("dashRecordsId").style.display = 'none';
    document.getElementById("paymentRecordsId").style.display = 'none';
    document.getElementById("duePayId").style.display = 'none';
    document.getElementById("latepayId").style.display = 'none';
    document.getElementById("manageuserId").style.display = 'block';
}