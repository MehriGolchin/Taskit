using System;

namespace Taskit.Models {

    public class ErrorViewModel {

        public string RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);

    }

}