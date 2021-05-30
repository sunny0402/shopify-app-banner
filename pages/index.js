import { ResourcePicker } from "@shopify/app-bridge-react";
import { EmptyState, Page } from "@shopify/polaris";
import React, { useEffect, useState } from "react";

function index({ shopOrigin }) {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);

  function handleProductSelection(payload) {
    setIsOpen(false);
  }
  return (
    <Page>
      <ResourcePicker
        resourceType="Product"
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        onSelection={handleProductSelection}
      />
    </Page>
  );
}

export default index;