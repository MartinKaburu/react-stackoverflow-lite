#!/bin/bash
source Jenkins/utils.sh

activateServiceAccount() {
    require GOOGLE_PROJECT_ID $GOOGLE_PROJECT_ID
    require COMPUTE_ZONE $COMPUTE_ZONE
    require CLUSTER_NAME $CLUSTER_NAME
    require SERVICE_ACCOUNT_KEY $SERVICE_ACCOUNT_KEY

    info "Activate Google Service Account"
    echo $SERVICE_ACCOUNT_KEY | base64 --decode > $SERVICE_KEY_PATH

    # setup kubectl auth
    gcloud auth activate-service-account --key-file $SERVICE_KEY_PATH
    gcloud --quiet config set project ${GOOGLE_PROJECT_ID}
    gcloud --quiet config set compute/zone ${COMPUTE_ZONE}
    gcloud --quiet container clusters get-credentials ${CLUSTER_NAME}
}

main(){
    activateServiceAccount
}

main
