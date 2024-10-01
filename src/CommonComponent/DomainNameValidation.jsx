const isValidDomainName = (domain) => {
    if (!domain || domain.length > 255) {
      return false;
    }
  
    try {
      const uri = new URL("http://" + domain);
      
      if (uri.hostname !== domain || !uri.href) {
        return false;
      }
  
      const parts = uri.hostname.split('.');
      for (let part of parts) {
        if (part.length > 63) {
          return false;
        }
      }
  
      return true;
    } catch (error) {
      return false;
    }
  };
  