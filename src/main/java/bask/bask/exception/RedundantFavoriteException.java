package bask.bask.exception;

public class RedundantFavoriteException extends RuntimeException {

    public RedundantFavoriteException() {
        super();
    }

    public RedundantFavoriteException(String message) {
        super(message);
    }

    public RedundantFavoriteException(String message, Throwable cause) {
        super(message, cause);
    }

    public RedundantFavoriteException(Throwable cause) {
        super(cause);
    }

    protected RedundantFavoriteException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
